import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'reactstrap';
import './BlogItem.scss';

BlogItem.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    create_At: PropTypes. instanceOf(Date),
    content: PropTypes.string,
};


BlogItem.defaultProps =
{
    title: '',
    name: '',
    create_At:'',
    content: ''
}

function BlogItem(props) {

    const {title, content, create_At, name} = props;

    return (
        <div>
            <Container className="blog-content">
                <Col className="blog-content-col">
                    <Row className="blog-content-col-title">{title}</Row>
                    <Row className="blog-content-col-name" > Author : {name}</Row>
                    <Row className="blog-content-col-create_at">Create At : {create_At}</Row>
                    <Row className="blog-content-col-content">{content}</Row>
                </Col>
            </Container>
        </div>
    );
}

export default BlogItem;