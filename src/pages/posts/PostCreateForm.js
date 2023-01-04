import React, { useRef, useState } from "react";
import { Alert, Button, Container, Form, Image } from "react-bootstrap";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import btnStyles from "../../styles/Button.module.css";
import Upload from "../../assets/Upload.png";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";


function PostCreateForm(props) {
  const { party } = props;

  const [errors, setErrors] =useState({})

  const [postData, setPostData] =useState({
    party: {party},
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {  
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();

    formData.append('title', title)
    formData.append('content', content)
    formData.append('image', imageInput.current.files[0])

    try {
      const {data} = await axiosReq.post('/posts/', formData);
      history.pushState(`/posts/${data.id}`)
    } catch (err) {
      console.log(err)
      if (err.response?.status !== 401){
        setErrors(err.respons?.data)
      }
    }
  };

  const textFields = (
    <Container>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
      />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <div className="d-flex justify-content-center">
        <Button
          className={`${btnStyles.Button}`}
          type="submit"
        >
          Create
        </Button>
        <Button 
          className={`${btnStyles.Button}`}
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
      </div>
    </Container>
    
  )
  return (
    <Form onSubmit={handleSubmit}>
      <Container
        className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
      >
        <Form.Group className="text-center">
          {image ? (
            <>
              <figure>
                <Image className={appStyles.Image} src={image} />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button}`}
                  htmlFor="image-upload"
                >
                  change the image
                </Form.Label>
              </div>
            </>
          ) : (
            <Form.Label
              className="d-flex justify-content-center"
              htmlFor="image-upload"
            >
              <Asset
                src={Upload}
                message="Click or tap to upload an image"
              />
            </Form.Label>
          )}
          <Form.File
            id="image-upload"
            accept="image/*"
            onChange={handleChangeImage}
            ref={imageInput}
          />
        </Form.Group>
        {textFields}
      </Container>
    </Form>
  
  )
}

export default PostCreateForm;