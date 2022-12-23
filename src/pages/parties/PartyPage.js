import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Party from "./Party";

function PostPage() {
  const { id } = useParams();
  const [party, setParty] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{data: party}] = await Promise.all([
          axiosReq.get(`/parties/${id}`),
        //   axiosReq.get(`/posts/?party=${id}`),
        //   axiosReq.get(`/comments/?post=${id}`),
        ])
        setParty({results: [party]})
        console.log(party)
      } catch(err){
        console.log(err)
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

  const calendar = (
    <Container className={appStyles.Content}>
      Upcoming events
    </Container>
  )


  return (
    <Row className="h-100">
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        {groupMembers}
        {calendar}
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={6}>
      {groupMembers}
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