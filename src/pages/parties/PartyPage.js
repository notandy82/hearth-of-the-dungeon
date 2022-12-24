import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Party from "./Party";
import { Image } from "react-bootstrap";
import { usePartyData, useSetPartyData } from "../../contexts/PartyDataContext";

function PostPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { id } = useParams();
  const setPartyData = useSetPartyData();
  const {pageParty} = usePartyData();
  const [party] = pageParty.results;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{data: pageParty}] = await Promise.all([
          axiosReq.get(`/parties/${id}/`)
        ])
        setPartyData(prevState => ({
          ...prevState,
          pageParty: {results: [pageParty]}
        }))
        setHasLoaded(true);
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [id, setPartyData]);

  

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
      <h2>{party.title}</h2>
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