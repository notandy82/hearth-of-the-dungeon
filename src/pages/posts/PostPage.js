import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Post from './Post';
import appStyles from "../../App.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: post}] = await Promise.all([
                    axiosReq.get(`/posts/${id}`)
                ])
                setPost({results: [post]})
                console.log(post)
            } catch (err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);
  return (
    <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
            <Post {...post.results[0]} setPosts={setPost} />
        </Col>
    </Row>
  )
}

export default PostPage;