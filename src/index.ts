import 'dotenv/config';
import { connectDB } from './config/db';
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import rootRouter from './routes/index';

connectDB();

const app = express();
const port = Number(process.env['PORT']) || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/', rootRouter);

app.get("/health", (_req: Request, res: Response) => {
    return res.status(200).json({
        success: true,
        message: "Server accessible"
    });
});


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

