import React from 'react'
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Party = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    posts_count,
    title,
    location,
    description,
    image,
    updated_at,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username
  return (
    <div>Party! Woo!</div>
  )
}

export default Party