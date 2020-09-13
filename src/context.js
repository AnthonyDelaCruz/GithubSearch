import React, { useState, useEffect } from "react";
import userMockData from "mockdata";
import followersMockData from "mockdata/mockFollowers";
import reposMockData from "mockdata/mockRepos";
import {
  checkRateLimit,
  searchUser,
  searchUserFollowers,
  searchUserRepos,
} from "./utils";

const GithubUsersContext = React.createContext();

const GithubUsersProvider = ({ children }) => {
  // this is where all the business logic will to to de couple it from the presentational components
  const [user, setUser] = useState(userMockData);
  const [followers, setFollowers] = useState(followersMockData);
  const [repos, setRepos] = useState(reposMockData);
  const [rateLimit, setRateLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearchUser = async (username) => {
    setError("");
    setLoading(true);
    const userObj = await searchUser(username);

    if (userObj.error) {
      setError(userObj.error);
      setLoading(false);
    } else {
      setUser(userObj);

      Promise.all([
        searchUserFollowers(userObj.login),
        searchUserRepos(userObj.login),
      ]).then(([followers, repos]) => {
        if (!followers.error) {
          setFollowers(followers);
        }
        if (!repos.error) {
          setRepos(repos);
        }
        setLoading(false);
      });
    }
  };

  // Check rate limit whenever page loads
  useEffect(() => {
    checkRateLimit().then((data) => {
      if (data.error || data === 0) {
        setRateLimit(0);
        setError(data.error || "You have exceeded your request limit");
      } else {
        setRateLimit(data);
      }
    });
  }, [handleSearchUser]);

  return (
    <GithubUsersContext.Provider
      value={{
        user,
        followers,
        repos,
        rateLimit,
        error,
        handleSearchUser,
        loading,
      }}
    >
      {children}
    </GithubUsersContext.Provider>
  );
};

export { GithubUsersContext, GithubUsersProvider };
