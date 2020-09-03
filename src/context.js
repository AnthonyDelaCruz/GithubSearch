import React, { useState } from "react";
import userMockData from "mockdata";
import followersMockData from "mockdata/mockFollowers";
import reposMockData from "mockdata/mockRepos";

const GithubUsersContext = React.createContext();

export const localStorageActions = (key, type = "get", val = null) => {
  if (type === "get") {
    return window.localStorage.getItem(key);
  }
  if (type === "set") {
    window.localStorage.setItem(key, val);
  }
  if (type === "remove") {
    window.localStorage.removeItem(key);
  }
};
const GithubUsersProvider = ({ children }) => {
  // this is where all the business logic will to to de couple it from the presentational components
  const [user, setUser] = useState(userMockData);
  const [followers, setFollowers] = useState(followersMockData);
  const [repos, setRepos] = useState(reposMockData);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorageActions("isLoggedIn")
  );

  return (
    <GithubUsersContext.Provider
      value={{
        user,
        followers,
        repos,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </GithubUsersContext.Provider>
  );
};

export { GithubUsersContext, GithubUsersProvider };
