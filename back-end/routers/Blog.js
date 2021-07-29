import express from 'express';
import {getBlogs, createBlog} from '../controllers/Blog.js';
import { getComment, createComment } from '../controllers/Comment.js';

const router = express.Router();


router.get('/', getBlogs);
router.post('/', createBlog);
router.get('/comment', getComment);
router.post('/comment', createComment);


export default router;