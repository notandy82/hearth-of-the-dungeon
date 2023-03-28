import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';
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
        <Avatar src={profile_image} height={55} />
        {owner}
        <div className="d-flex align-items-center">
          <span>{updated_at}</span>
        </div>
      </Card.Body>
      <Card.Body>
        <Link to={`/posts/${id}`}>
          <Card.Img src={image} alt={title} />
        </Link>
      </Card.Body>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
    </Card>
  )
}

export default Post;