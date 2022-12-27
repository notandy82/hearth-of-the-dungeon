import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import { Image } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Party from "./Party";

function PostPage() {
  const { id } = useParams();
  const [party, setParty] = useState({ results: [] });
  const currentUser = useCurrentUser();

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


  




  return (
    <Container className={appStyles.Content}>
      <Party {...party.results[0]} setParties={setParty} />
      <Row className="h-100">
      
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={6}>          
        <Container className={appStyles.Content}>
        posts
          <Container className={appStyles.Content}>
          comments
          </Container>
        </Container>
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        
        
      </Col>
    </Row>
    </Container>
    
  );
}

export default PostPage;