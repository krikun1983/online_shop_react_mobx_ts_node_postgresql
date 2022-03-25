import { Router } from "express";
import authorizationMiddleware from "../middlewares/authorizationMiddleware.js";
import { typeController } from "./controllers/index.js";
const router = new Router();

router.post('/', authorizationMiddleware('ADMIN'), typeController.create);
router.get('/', authorizationMiddleware('ADMIN'), typeController.getAll);
router.delete('/', authorizationMiddleware('ADMIN'), typeController.delete);

export default router;