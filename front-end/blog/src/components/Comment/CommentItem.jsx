import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import './CommentItem.scss';

CommentItem.propTypes = {
    name: PropTypes.string,
    comment: PropTypes.string
};

CommentItem.defaultProps = {
    name: '',
    comment: ''
}

function CommentItem(props) {

    const { name, comment } = props;

    return (
        <div>
            <Container className="commentItem">
                <Col>
                
                    <Row className="commentItem-name">name : {name}</Row>

                    <Row className="commentItem-comment">{comment}</Row>

                </Col>

            </Container>
        </div>
    );
}

export default CommentItem;