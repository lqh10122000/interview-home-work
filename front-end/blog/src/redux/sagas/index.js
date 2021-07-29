import {takeLatest, call, put} from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';



function* fetchBlogsSaga(action)
{
    try {
        const blogs = yield call(api.fetchBlogs);
        yield put(actions.getBlogs.getBlogsSuccess(blogs.data)); 
    } catch (error) {
        console.error(error);
        yield put(actions.getBlogs.getBlogsFailure(error));
    }
}

function* createBlogSaga(action)
{
    try {

        const blog = yield call(api.createBlog, action.payload);
        yield put(actions.createBlog.createBlogSuccess(blog.data));

    } catch (error) {
        console.error(error);
        yield put(actions.createBlog.createBlogFailure(error));
    }
}

function* loginSaga(action)
{
    try {
        const login = yield call(api.login, action.payload);
        yield put(actions.login.loginSuccess(login));
    } catch (error) {
        console.log('login saga ', error.error);
        // console.error(error);
        yield put(actions.login.loginFailure(error));
    }
}

function* registerSaga(action)
{
    try {   
        const register = yield call(api.register, action.payload);
        yield put(action.register.registerSuccess(register));
    } catch (error) {
        console.error(error);
        yield put(action.register.registerFailure(error));
    }
}

function* mySaga()
{
    yield takeLatest(actions.getBlogs.getBlogsRequest, fetchBlogsSaga);
    yield takeLatest(actions.createBlog.createBlogRequest, createBlogSaga);
    yield takeLatest(actions.login.loginRequest, loginSaga);
    yield takeLatest(actions.register.registerRequest, registerSaga);
}

export default mySaga;