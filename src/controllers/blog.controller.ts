import { Request, Response } from "express";
import Blog from "../models/Blog";

export interface AuthRequest extends Request {
    user?: { id: string }
}

export const createBlog = async(_req: AuthRequest, res: Response) => {
    try {
        const { title, content, tags, status } = _req.body;
        const userId = _req.user?.id;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: 'You must login to access this feature.'
            });
        }

        if (!title || !content) {
            return res.status(400).json({ 
                success: false, 
                message: 'Title and content are required' 
            });
        }

        console.log("Creating blog..");

        const newBlog = await Blog.create({
            title,
            content,
            tags,
            status,
            author: userId
        });

        console.log("Blog created:", newBlog);

        return res.status(201).json({
            success: true,
            data: newBlog
        });

    } catch (error) {
        console.error("Create Blog error:", error);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}

export const getBlogs = async (_req: Request, res: Response) => {
    try {
        const blogs = await Blog.find({ status: 'published' })
            .populate('author', 'name email')
            .sort({ createdAt: -1 });
        
        return res.status(200).json({
            success: true,
            count: blogs.length,
            data: blogs
        });

    } catch (error) {
        console.error("Error fetching blogs:", error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
}

export const getBlogById = async (_req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(_req.params['id']).populate('author', 'name email');
        if (!blog || blog.status !== 'published') {
            return res.status(404).json({
                success: false,
                message: "The blog is unavailable"
            });
        }

        return res.status(200).json({
            success: true,
            data: blog
        });

    } catch (error) {
        console.error("Get Blog by ID error:", error);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
}