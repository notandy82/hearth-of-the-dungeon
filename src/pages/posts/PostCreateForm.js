import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Upload from "../../assets/Upload.png";
import { useHistory } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import Asset from "../../components/Asset";

function PostCreateForm() {

  const [errors, setErrors] = useState({});

  const [postData, setPostData] =useState({
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;

  const imageInput = useRef(null)
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };


  
  const textFields = (
    <div className="text-center">
      Hello
    </div>
  )

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={10}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Select a new image 
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                <Asset src={Upload} message="Click to upload an image" />
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
        </Col>        
      </Row>
    </Form>
  );
}

export default PostCreateForm;