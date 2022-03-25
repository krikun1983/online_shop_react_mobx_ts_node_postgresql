import ApiError from "../../middlewares/ApiError/ApiError.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from "../../models/models.js";

const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  )
}


class UserController {
  async registration(request, response, next) {
    const { email, password, role } = request.body
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await models.User.findOne({ where: { email } })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await models.User.create({ email, role, password: hashPassword })
    const basket = await models.Basket.create({ userId: user.id })
    const token = generateJwt(user.id, user.email, user.role)
    return response.json({ token })
  }

  async login(request, response, next) {
    const { email, password } = request.body
    const user = await models.User.findOne({ where: { email } })
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    return response.json({ token })
  }

  async authorization(request, response, next) {
    const token = generateJwt(request.user.id, request.user.email, request.user.role)
    return response.json({ token })
  }
}

export default new UserController();