import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    content,
    updated_at,
    partyPage,
    setPost,
    party,
    image,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  
  return (
    <Card className={StyleSheet.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Avatar src={profile_image} height={55} />
          {props.owner}
          {/* <div className="d-flex align-items-center">
              <span>{updated_at}</span>
              {is_owner && postPage && (
                <MoreDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              )}
            </div> */}
          </Media>
      </Card.Body>
      <Card.Body>
        {title}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
    </Card>
  )
}

export default Post;