import models from "../../models/models.js";
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 } from "uuid";
import ApiError from '../../middlewares/ApiError/ApiError.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

class DeviceController {
  async create(request, response, next) {
    try {
      let { name, price, brandId, typeId, info } = request.body
      const { img } = request.files
      let fileName = v4() + ".jpg"
      img.mv(path.resolve(__dirname, '../..', 'static', fileName))

      const device = await models.Device.create({ name, price, brandId, typeId, img: fileName });

      // if (info) {
      //   info = JSON.parse(info)
      //   info.forEach(i =>
      //     models.DeviceInfo.create({
      //       title: i.title,
      //       description: i.description,
      //       deviceId: device.id
      //     })
      //   )
      // }

      return response.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }
  async getAll(request, response) {

  }
  async getOneById(request, response) {

  }
}

export default new DeviceController();