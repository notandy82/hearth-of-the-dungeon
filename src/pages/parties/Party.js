import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Party.module.css";

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
  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/parties/create"
    >
      <i className="far fa-plus-square"></i>Add a post
    </NavLink>
  )

  // const handleEdit = () => {
  //   history.push(`/parties/${id}/edit`);
  // };

  // const handleDelete = async () => {
  //   try {
  //     await axiosRes.delete(`/parties/${id}/`)
  //     history.goBack();
  //   } catch (err) {

  //   }
  // };
  return (
    <Container>
      <div>
        Party! Woo!
        {addPostIcon}
      </div>
    </Container>    
  )
}

export default Party