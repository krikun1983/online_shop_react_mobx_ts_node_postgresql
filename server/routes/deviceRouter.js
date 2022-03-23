import { Router } from "express";
import { deviceController } from "./controllers/index.js";
const router = new Router();

router.post('/', deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOneById);

export default router;