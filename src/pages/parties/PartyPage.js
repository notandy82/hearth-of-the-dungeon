import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


import Party from "./Party";
import PostCreateForm from "../posts/PostCreateForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PartyPage() {
  const { id } = useParams();
  const [party, setParty] = useState({ results: [] });
  const [posts, setPosts] = useState({ results: [] });
  const currentUser = useCurrentUser();
  
  

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: party }, {data: posts}] = await Promise.all([
          axiosReq.get(`/parties/${id}`),
          axiosReq.get(`/posts/?parties=${id}`)
        ]);
        setParty({ results: [party] });
        setPosts(posts);
        console.log(posts)
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
      {currentUser ? (
        <PostCreateForm
          profile_id={CurrentUserContext.profile_id}         
          party={id}
          setPosts={setPosts}
        />
        ) : posts.results.length ? (
          "Posts"
        ) : null}
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

export default PartyPage;