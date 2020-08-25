import React, { useState } from "react";
import userMockData from "mockdata";
import followersMockData from "mockdata/mockFollowers";
import reposMockData from "mockdata/mockRepos";
const GithubUsersContext = React.createContext();

const GithubUsersProvider = ({ children }) => {
  // this is where all the business logic will to to de couple it from the presentational components
  const [user, setUser] = useState(userMockData);
  const [followers, setFollowers] = useState(followersMockData);
  const [repos, setRepos] = useState(reposMockData);
  return (
    <GithubUsersContext.Provider
      value={{
        user,
        followers,
        repos,
      }}
    >
      {children}
    </GithubUsersContext.Provider>
  );
};

export { GithubUsersContext, GithubUsersProvider };
