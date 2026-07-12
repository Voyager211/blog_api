import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
    title: string;
    content: string;
    author: mongoose.Types.ObjectId;
    tags: string[];
    status: 'draft' | 'published';
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            maxLength: [120, 'Title cannot be more than 120 characters']
        },
        content: {
            type: String,
            required: [true, 'Content is required']
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        tags: {
            type: [String],
            default: []
        },
        status: {
            type: String,
            enum: ['draft', 'published'],
            default: 'draft'
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IBlog>('Blog', BlogSchema);