import mongoose from 'mongoose';

const comment = new mongoose.Schema(
    {

        blogId: {
            type: String,
        },
        owner: {
            type: String
        },
        comment:{
            type: String
        }
    },
    {timestamps: true}
)

export const CommentModel = mongoose.model('Comment', comment);