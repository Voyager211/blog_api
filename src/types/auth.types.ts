import { Request } from "express";

// Registration
export interface RegisterBody { 
    name: string; 
    email: string; 
    password: string; 
    confirmPassword: string; 
}

export interface RegisterRequest extends Request { 
    body: RegisterBody; 
}

export interface RegisterResponse { 
    success: boolean; 
    message: string; 
    token?: string;
    user?: {
        id: string,
        name: string;
        email: string;
    }
}

// Login
export interface LoginBody { 
    email: string; 
    password: string; 
}

export interface LoginRequest extends Request { 
    body: LoginBody; 
}

export interface LoginResponse { 
    success: boolean; 
    message: string;
    user?: {
        id: string,
        name: string,
        email: string
    }
}

// Logout
export interface LogoutResponse { 
    success: boolean; 
    message: string; 
}