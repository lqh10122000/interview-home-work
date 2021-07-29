import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) =>
{
    return reduxAction().type;
};

export const getBlogs = createActions({
    getBlogsRequest: undefined,
    getBlogsSuccess: (payload) => payload,
    getBlogsFailure: (err) => err,
});

export const createBlog = createActions({
    createBlogRequest: (payload) => payload,
    createBlogSuccess: (payload) => payload,
    createBlogFailure: (err) => err,
});

export const login = createActions({
    loginRequest : (payload) => payload,
    loginSuccess: (payload) => payload,
    loginFailure: (err) => err,
})

export const register = createActions({
    registerRequest : (payload) => payload,
    registerSuccess: (payload) => payload,
    registerFailure: (err) => err,
});


export const showModal = createAction('SHOW_COMMENT_MODAL');
export const hideModal = createAction('HIDE_COMMENT_MODAL');

