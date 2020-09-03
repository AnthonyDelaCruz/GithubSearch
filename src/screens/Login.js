import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { localStorageActions, GithubUsersContext } from "../context";

export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(GithubUsersContext);
  const history = useHistory();
  const handleLogin = () => {
    localStorageActions("isLoggedIn", "set", "true");
    setIsLoggedIn(true);
    history.push("/home");
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/home");
    }
  }, []);

  if (isLoggedIn) return null;

  return (
    <div
      className="login-screen d-flex align-items-center justify-content-center"
      style={{ minHeight: "inherit" }}
    >
      <div className="px-3">
        <h2
          style={{ fontSize: "2rem" }}
          className="font-weight-bold text-center"
        >
          Github User Search
        </h2>
        <div className="p-3 mb-3" style={{ border: "1px solid red" }}>
          <p style={{ fontSize: "1.2rem" }}>Reminder:</p>
          <p className="m-0">
            Functionality is still not complete. This will just mock a login
            flow.
          </p>
        </div>
        <div className="d-flex flex-column">
          <button className="btn btn-primary mb-3 py-2" onClick={handleLogin}>
            Login with Facebook
          </button>
          <button className="btn btn-primary py-2" onClick={handleLogin}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
