import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";
import {
    createBlog,
    getBlogs,
    getBlogById
} from "../controllers/blog.controller";

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);

router.post('/create', protectRoute, createBlog);

export default router;
