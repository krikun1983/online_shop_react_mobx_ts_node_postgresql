import ApiError from "../../middlewares/ApiError/ApiError.js";

class UserController {
  async registration(request, response) {

  }
  async login(request, response) {

  }
  async authorization(request, response, next) {
    const { id } = request.query;
    if (!id) {
      return next(ApiError.badRequest('Не задан ID'))
    }
    response.json(id);
  }
}

export default new UserController();