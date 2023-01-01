import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

function EventCreateForm() {
  const [eventData, setEventData] = useState({
    title: "",
    about: "",
    when: "",
  });
  const { title, about, when } = eventData;

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>About</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="About"
        />
      </Form.Group>
    </div>
  );


  return (
    <div>{textFields}</div>
  )
}

export default EventCreateForm