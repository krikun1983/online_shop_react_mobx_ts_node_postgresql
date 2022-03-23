import { Router } from "express";
import { typeController } from "./controllers/index.js";
const router = new Router();

router.post('/', typeController.create);
router.get('/', typeController.getAll);
router.delete('/', typeController.delete);

export default router;