import React, { useState } from 'react'
import { CurrentUserContext, useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';
import { Col } from 'react-bootstrap';
import PostCreateForm from '../posts/PostCreateForm';

const Party = (props) => {
  const {
    id, owner, title, image, description, location,
  } = props;
  const [post, setPost] = useState({ results: [] });
  const currentUser = useCurrentUser();
  return (
    <div>
      <Avatar src={image} height={85} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{location}</h3>
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      {currentUser ? (
        <PostCreateForm
          profile_id={CurrentUserContext.profile_id}         
          party={id}
          setPost={setPost}
        />
        ) : post.results.length ? (
          "Posts"
        ) : null}
        
        
      </Col>
    
    </div>
  )
}

export default Party