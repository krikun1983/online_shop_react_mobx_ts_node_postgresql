import { Router } from "express";
import { userController } from "./controllers/index.js";
const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/authorization', userController.authorization);

export default router;