import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
  const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated && !isLoading) history.replace("/home");
  }, [isAuthenticated, isLoading]);

  if (isAuthenticated || isLoading) return null;
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
        <div className="d-flex flex-column">
          <button
            className="btn btn-primary mb-3 py-2"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
