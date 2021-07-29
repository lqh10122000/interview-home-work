import {BlogModel} from '../models/BlogModel.js';

export const getBlogs = async (req, res) =>
{
    try {
        const blogs = await BlogModel.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export const createBlog = async (req, res) =>
{
    try {
        const newBlog = req.body;
        const blog = new BlogModel(newBlog);
        await blog.save();
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({error: err});
    };
};