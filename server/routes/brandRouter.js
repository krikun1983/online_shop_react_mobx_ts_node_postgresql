import { Router } from "express";
import { brandController } from "./controllers/index.js";
const router = new Router();

router.post('/', brandController.create);
router.get('/', brandController.getAll);
router.delete('/', brandController.delete);

export default router;