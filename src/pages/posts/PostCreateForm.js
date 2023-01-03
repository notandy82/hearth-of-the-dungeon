import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";

function PostCreateForm(props) {
  const { party } = props;

  const [postData, setPostData] =useState({
    party: {party},
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;
  return (
  <Container
    className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
  >

  </Container>
  )
}

export default PostCreateForm;