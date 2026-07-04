import jwt from "jsonwebtoken";

const JWT_SECRET = process.env["JWT_SECRET"];

if (!JWT_SECRET) {
    throw new Error("CRITICAL: JWT_SECRET environment variable is missing");
}

export const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, JWT_SECRET, {
        expiresIn: '7d'
    });
};