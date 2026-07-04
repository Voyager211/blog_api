import express, { Request, Response } from 'express';

const app = express();
const port = Number(process.env['PORT']) || 3000;

app.get("/", (_req: Request, res: Response) => {
    return res.status(200).json({
        success: true,
        message: "Server accessible"
    });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

