import React from 'react';
import { Card } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/Post.module.css';

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner

  return (
    <Card className={styles.Post}>
      <Card.Body>
        
      </Card.Body>
    </Card>
  )
}

export default Post;