import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import Post from './Post';

const PostContainer = (props) => {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const {data} = await axiosReq.get(`/posts/`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [pathname]);

  return (
    <Row className="h100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map(post => (
                <Post key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              console.log('show no results asset')
            )}
          </>
        ) : (
          console.log('show loading spinner')
        )}
      </Col>
    </Row>
  );
}

export default PostContainer;