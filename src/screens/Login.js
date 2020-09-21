import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaGithub } from "react-icons/fa";
import Button from "components/Button";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      className="login-screen d-flex align-items-center justify-content-center"
      style={{ minHeight: "inherit" }}
    >
      <div className="login-screen__login-container px-3 d-flex flex-column align-items-center p-5">
        <FaGithub color="#fff" size={130} />
        <h4 className="text-white font-weight-bold text-center my-3">
          Github User Search
        </h4>
        <br />
        <div className="d-flex flex-column">
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        </div>
      </div>
    </div>
  );
}
