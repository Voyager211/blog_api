import mongoose from "mongoose";

export const connectDB = async(): Promise<void> => {
    try {
        const mongoURI = process.env['MONGO_URI'];
        if (!mongoURI) {
            throw new Error('MongoDB URI is not mentioned in the environment variables');
        }

        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected');

        process.on('SIGINT', async() => {
            await mongoose.connection.close();
            process.exit(0);
        });

    } catch (error) {
        throw new Error(`Failed to connect MongoDB: ${error}`);
    }
};

export const disconnectDB = async(): Promise<void> => {
    try {
        await mongoose.connection.close();
    } catch (error) {
        throw new Error(`Failed to disconnect MongoDB: ${error}`);
    }
};