import { CommentModel } from "../models/CommentModel.js";

export const getComment = async (req, res) => {
    const {blogId} = req.body;
    try {
        const comments = await CommentModel.find({blogId : blogId});
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).json({error: err});
    }
};

export const createComment = async (req, res) => {

    try {
        const newComment = req.body;
        const comment = new CommentModel(newComment);
        await comment.save();
        res.status(200).json(comment);
    } catch (err) {
        res.status(500).json({error: err});
    };

};