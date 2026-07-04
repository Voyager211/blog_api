import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { generateToken } from '../config/jwt';
import User from '../models/User';
import {
    RegisterRequest,
    RegisterResponse,
    LoginRequest,
    LoginResponse,
    LogoutResponse
} from '../types/auth.types'


export const register = async (_req: RegisterRequest, res: Response<RegisterResponse>) => {
    try {
        const { name, email, password, confirmPassword } = _req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

        const existingUser = await User.findOne({ email:  email});
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already in use"
            });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name, email, passwordHash });

        const token = generateToken(newUser._id.toString());

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env["NODE_ENV"] === 'production',
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 * 7
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser._id.toString(),
                name: newUser.name,
                email: newUser.email
            }
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to register a new user at this time. Please try again"
        });
    }
}

export const login = async (_req: LoginRequest, res: Response<LoginResponse>) => {
    
}

export const logout = async (_req: Request, res: Response<LogoutResponse>) => {

}
