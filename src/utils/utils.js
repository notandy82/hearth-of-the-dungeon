import jwtDecode from "jwt-decode";

export const setTokenTimestamp = (data) => {
    const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
  };
  
  export const shouldRefreshToken = () => {
    return !!localStorage.getItem('refreshTokenTimestamp');
  };
  
  export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshTokenTimestamp");
  };

  export const followHelper = (party, clickedParty, following_id) => {
    return party.id === clickedParty.id
      ? 
        {
          ...party,
          followers_count: party.followers_count + 1,
          following_id,
        }
      : profile.is_owner
      ? 
        { ...profile, following_count: profile.following_count + 1 }
      : 
        profile;
  };
  
  export const unfollowHelper = (party, clickedParty) => {
    return party.id === clickedParty.id
      ? 
        {
          ...party,
          followers_count: party.followers_count - 1,
          following_id: null,
        }
      : profile.is_owner
      ? 
        { ...profile, following_count: profile.following_count - 1 }
      : 
        profile;
  };