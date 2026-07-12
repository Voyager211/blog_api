import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";
import {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog
} from "../controllers/blog.controller";

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getBlogById);

router.post('/create', protectRoute, createBlog);

router.patch('/update/:id', protectRoute, updateBlog);

router.delete('/delete/:id', protectRoute, deleteBlog);

export default router;
