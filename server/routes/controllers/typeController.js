import models from '../../models/models.js';
import ApiError from '../../middlewares/ApiError/ApiError.js';

class TypeController {
  async create(request, response) {
    const { name } = request.body;
    const type = await models.Type.create({ name });
    return response.json(type);
  }
  async getAll(request, response) {
    const types = await models.Type.findAll();
    return response.json(types);
  }
  async delete(request, response) {

  }
}

export default new TypeController();