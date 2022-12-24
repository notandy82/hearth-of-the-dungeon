import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Party = (props) => {
  const {
    owner,
    party_id,
    party_image,
    posts_count,
    title,
    location,
    description,
    image,
    updated_at,
  } = props;
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/parties/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/parties/${id}/`)
      history.goBack();
    } catch (err) {

    }
  };
  return (
    <div>Party! Woo!</div>
  )
}

export default Party