import React from "react";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    title,
    content, image,
    updated_at,
    partyPage,
    setPosts,
    party_id,
  } = props;
  
  return (
    <div>A post!</div>
  )
}

export default Post;