import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env["JWT_SECRET"];
if (!JWT_SECRET) {
    throw new Error("CRITICAL: JWT_SECRET environment variable is missing");
}

interface DecodedToken {
    id: string
}

export interface AuthRequest extends Request {
    user?: { id: string }
}

export const protectRoute = (_req: AuthRequest, res: Response, next: NextFunction) => {
    const token = _req.cookies?.['token'] || _req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, token missing"
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

        _req.user = { id: decoded.id };

        return next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Not authorized, invalid token"
        });
    }
}