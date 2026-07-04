import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller";

const router = Router();

router.post('/register', register);
// router.post('/login');
// router.post('/logout')

export default router;