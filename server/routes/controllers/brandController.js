import models from "../../models/models.js";

class BrandController {
  async create(request, response) {
    const { name } = request.body;
    const brand = await models.Brand.create({ name });
    return response.json(brand);
  }
  async getAll(request, response) {
    const brands = await models.Brand.getAll();
    return response.json(brands);
  }
  async delete(request, response) {

  }
}

export default new BrandController();