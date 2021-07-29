import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { Container, Col, Row} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import './CommentList.scss';
import { modalState$ } from '../../redux/selectors';

CommentList.propTypes = {
    
};

function CommentList(props) {

    
    const { isShow } = useSelector(modalState$);

    // const dispatch = useDispatch();
    // const blogs = useSelector(blogsState$);

    // useEffect(() => {

    //     dispatch(actions.getBlogs.getBlogsRequest());

    // }, [dispatch]);


    return (
        <Container className="comment" open={isShow}>
             {/* {blogs.map((blog) => (
                <BlogItem name = {blog.name} content = {blog.content} create_At = {blog.create_At} title = {blog.title}/>
            ))} */}
            <CommentItem name="Huy Le" comment =" fhsdkjafhsdkj fsdhfkjsdfhskjfhsdfkj fdshfjkshfkajfhkjsdfhhksjdf sdkjfhskfjds fkdjsh"/>

        </Container>
    );
}

export default CommentList;