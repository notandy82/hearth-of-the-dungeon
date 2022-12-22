import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../assets/Upload.png";

import styles from "../../styles/PartyCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function PartyCreateForm() {
  
  const [errors, setErrors] =useState({});

  const [partyData, setPartyData] =useState({
    title: "",
    location: "",
    description: "",
    image: "",
  });
  const { title, location, description, image } = partyData;

  const imageInput = useRef(null);

  const handleChange = (event) => {
    setPartyData({
      ...partyData,
      [event.target.name]: event.target.value,
    });
  };

  
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label> Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>



      <button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </button>
      <button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        type="submit"
      >
        create
      </button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={10}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click to upload an image" />
              </Form.Label>

            </Form.Group>
            {textFields}
            {/* <div className="d-md-none">{textFields}</div> */}
          </Container>
        </Col>
        {/* <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col> */}
      </Row>
    </Form>
  );
}

export default PartyCreateForm;