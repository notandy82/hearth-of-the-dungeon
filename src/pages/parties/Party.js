import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Avatar from '../../components/Avatar';

const Party = (props) => {
  const {
    id, owner, title, image, description, location,
  } = props;
  const currentUser = useCurrentUser();
  return (
    <div>
      <Avatar src={image} height={85} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{location}</h3>
    </div>
  )
}

export default Party