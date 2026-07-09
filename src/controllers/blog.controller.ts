import { Request, Response } from "express";
import Blog from "../models/Blog";

export interface AuthRequest extends Request {
    user?: { id: string }
}

export const createBlog = async(req: AuthRequest, res: Response) {
    try {
        const { title, content, tags, status } = req.body;
        const userId = req.user?.id;

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

