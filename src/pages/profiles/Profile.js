import React from 'react';
import styles from '../../styles/Profile.module.css';
import btnStyles from '../../styles/Button.module.css';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const Profile = (props) => {
  const { profile, mobile, imageSize=55 } = props;
  const { id, following_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-Column"}`}>
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
            Avatar
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
    </div>
  )
}

export default Profile