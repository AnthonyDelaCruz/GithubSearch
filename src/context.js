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
import { FaTumblrSquare } from "react-icons/fa";

const GithubUsersContext = React.createContext();
const AuthContext = React.createContext();

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

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorageActions("isLoggedIn")
  );
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  GithubUsersContext,
  GithubUsersProvider,
  AuthContext,
  AuthContextProvider,
};
