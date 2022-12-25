import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import { Image } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PostPage() {
  const { id } = useParams();
  const [party, setParty] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: party }] = await Promise.all([
          axiosReq.get(`/parties/${id}`),
        ]);
        setParty({ results: [party] });
        console.log(party);
      } catch(err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);


  

  const imagePosts = (
    <Container className={appStyles.Content}>
      gallery of images from posts
    </Container>
  )

  const groupMembers = (
    <Container className={appStyles.Content}>
      Party members
    </Container>
  )

  const groupName = (
    <Container className={appStyles.Content}>
      <h2>Party title</h2>
    </Container>
  )

  const calendar = (
    <Container className={appStyles.Content}>
      Upcoming events
    </Container>
  )

  const partyImage = (
    <Container className={appStyles.Content}>
      Party image
    </Container>
  )


  return (
    <Row className="h-100">
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        {partyImage}
        {groupMembers}
        {calendar}
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      {groupName}
        
        <Container className={appStyles.Content}>
          posts
          <Container className={appStyles.Content}>
            comments
          </Container>
        </Container>
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        
        {imagePosts}
      </Col>
    </Row>
  );
}

export default PostPage;