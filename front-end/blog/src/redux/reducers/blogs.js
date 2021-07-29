import {INIT_STATE} from '../../constant';
import { getType, getBlogs, createBlog } from '../actions';

export default function blogsReducer(state = INIT_STATE.blogs, action)
{
    switch (action.type) {
        case getType(getBlogs.getBlogsRequest):
            return {
                ...state,
                isLoading: true,
            }
            break;
        case getType(getBlogs.getBlogsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
            break;
        case getType(getBlogs.getBlogsFailure):
            return {
                ...state,
                isLoading: false,
            }
            break;
        case getType(createBlog.createBlogSuccess):
            return {
                ...state,
                data:[...state.data, action.payload]
            }
            break;
        
    
        default:
            return state;
            break;
    }
}