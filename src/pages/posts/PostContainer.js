import React from 'react';
import { Col, Row } from 'react-bootstrap'
import Post from './Post';

const PostContainer = (props) => {
  return (
    <Row className="h100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>List of posts here</p>
      </Col>
    </Row>
  )
}

export default PostContainer;