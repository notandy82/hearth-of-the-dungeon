import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";


import Party from "./Party";
import PostCreateForm from "../posts/PostCreateForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Post from "../posts/Post";

const PartyPage = (props) => {
  const { id } = useParams();
  const [party, setParty] = useState({ results: [] });
  
  const currentUser = useCurrentUser();
  const [partyPosts, setPartyPosts] = useState({ results: [] });
  const [posts, setPosts] = useState({ results: [] });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: party }, {data: partyPosts}] = await Promise.all([
          axiosReq.get(`/parties/${id}`),
          axiosReq.get(`/posts/?parties=${id}`),
        ]);
        setParty({ results: [party] });
        setPartyPosts({ results: [partyPosts] });
      } catch(err) {
        // console.log(err);
      }
    };
    
    fetchData();
  }, [id]);

  return (
    <Container className={appStyles.Content}>
      <Party {...party.results[0]} setParties={setParty} />
        <PostCreateForm
          profile_id={CurrentUserContext.profile_id}         
          party={id}
          setPosts={setPosts}
        />
        <div>
          
        </div>
    </Container>    
  );
}

export default PartyPage;