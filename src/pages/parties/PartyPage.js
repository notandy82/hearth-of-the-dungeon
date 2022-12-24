import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Party from "./Party";
import { Image } from "react-bootstrap";

function PostPage() {
  const { id } = useParams();
  const [party, setParty] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{data: pageParty}] = await Promise.all([
          axiosReq.get(`/parties/${id}/`)
        ])
      } catch (err) {
        
      }
    }
    }

    handleMount()
  }, [id]);

  const popularParties = (
    <Container className={appStyles.Content}>
        Most followed parties
        </Container>
  )

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
      <h2>{party?.title}</h2>
    </Container>
  )

  const calendar = (
    <Container className={appStyles.Content}>
      Upcoming events
    </Container>
  )

  const partyImage = (
    <Container className={appStyles.Content}>
      <Image src={party?.image} />
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
        <Party {...party.results[0]} setParties={setParty} />
        <Container className={appStyles.Content}>
          posts
          <Container className={appStyles.Content}>
            comments
          </Container>
        </Container>
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        {popularParties}
        {imagePosts}
      </Col>
      
    </Row>
  );
}

export default PostPage;