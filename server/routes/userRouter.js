import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { userController } from "./controllers/index.js";
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/authorization', authMiddleware, userController.authorization);

export default router;