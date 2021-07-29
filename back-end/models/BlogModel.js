import mongoose from "mongoose";

const blog = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        owner: {
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true, 
        },
        commentCount: {
            type: Number,
            default: 0,
        }   
    },
    {timestamps: true}
);

export const BlogModel = mongoose.model('Blog', blog);