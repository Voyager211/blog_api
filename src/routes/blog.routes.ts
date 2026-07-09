import { Router } from "express";
import { createBlog } from "../controllers/blog.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = Router();

router.post('/create', protectRoute, createBlog);

export default router;
