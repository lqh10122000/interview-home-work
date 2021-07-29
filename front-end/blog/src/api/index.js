import axios from 'axios';

const URL = 'http://localhost:5000';


export const login = (payload) => axios.post(`${URL}/login`, payload);
export const register = (payload) => axios.post(`${URL}/register`, payload);
export const fetchBlogs = () => axios.get(`${URL}/blog`);
export const createBlog = (payload) => axios.post(`${URL}/blog`, payload);
