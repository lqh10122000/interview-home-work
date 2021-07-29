import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { blogsState$, modalState$ } from '../../redux/selectors';
import { Button, Container } from 'reactstrap';
import CommentItem  from '../Comment/CommentList';
import BlogItem from './BlogItem';
import * as actions from '../../redux/actions';
import CommentList from '../Comment/CommentList';
import {showModal} from '../../redux/actions';
import './BlogsList.scss';

BlogsList.propTypes = {
    
};

function BlogsList(props) {

    const dispatch = useDispatch();
    const blogs = useSelector(blogsState$);

    useEffect(() => {

        dispatch(actions.getBlogs.getBlogsRequest());

    }, [dispatch]);

    // if(dispatch)

    const openCommentModal = React.useCallback(() => {

        console.log("here is comment");

        dispatch(showModal());

        
    }, [dispatch]);
    
    const { isShow } = useSelector(modalState$);
    

    return (
        <Container>
            {blogs.map((blog) => (
                <div>
                    <BlogItem key={blog._id} name = {blog.name} content = {blog.content} create_At = {blog.create_At} title = {blog.title}/>
                    <Button className="btn-showComment" onClick={openCommentModal}>

                        <h5 className = "btn-showComment-reply">2 Reply</h5>
                        {/* <CommentList/> */}

                    </Button>
                </div>
            ))}
        
        </Container>
    );
}

export default BlogsList;