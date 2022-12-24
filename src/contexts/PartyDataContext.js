import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

const PartyDataContext = createContext();
const SetPartyDataContext = createContext();

export const usePartyData = () => useContext(PartyDataContext);
export const useSetPartyData = () => useContext(SetPartyDataContext);

export const PartyDataProvider = ({ children }) => {
  const [partyData, setPartyData] = useState({
    // we will use the pageParty later!
    pageParty: { results: [] },
    popularParties: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedParty) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedParty.id,
      });

      setPartyData((prevState) => ({
        ...prevState,
        pageParty: {
          results: prevState.pageParty.results.map((party) =>
            followHelper(profile, clickedParty, data.id)
          ),
        },
        popularParties: {
          ...prevState.popularParties,
          results: prevState.popularProfiles.results.map((profile) =>
            followHelper(profile, clickedParty, data.id)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleUnfollow = async (clickedParty) => {
    try {
      await axiosRes.delete(`/followers/${clickedParty.following_id}/`);

      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageParty.results.map((profile) =>
            unfollowHelper(party, clickedParty)
          ),
        },
        popularParties: {
          ...prevState.popularParties,
          results: prevState.popularParties.results.map((profile) =>
            unfollowHelper(profile, clickedParty)
          ),
        },
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/parties/?ordering=-followers_count"
        );
        setPartyData((prevState) => ({
          ...prevState,
          popularParties: data,
        }));
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <PartyDataContext.Provider value={profileData}>
      <SetPartyDataContext.Provider
        value={{ setPartyData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetPartyDataContext.Provider>
    </PartyDataContext.Provider>
  );
};