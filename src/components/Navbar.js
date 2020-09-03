import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../constants";
import { GithubUsersContext, localStorageActions } from "../context";

const Nav = styled.div`
  background-color: #9bc2cf;
  display: flex;
  span,
  h4 {
    color: #334045;
    font-weight: bold;
  }
  .profile-image {
    height: 60px;
    width: 60px;
    background-color: #000000;
    border-radius: 50%;
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    .profile-image {
      height: 40px;
      width: 40px;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
`;

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(GithubUsersContext);
  const history = useHistory();
  const handleLogout = () => {
    localStorageActions("isLoggedIn", "remove");
    setIsLoggedIn(false);
    history.push("/");
  };
  if (!isLoggedIn) return null;
  return (
    <Nav>
      <div className="d-flex align-items-center justify-content-between w-100 p-3 px-md-5 py-md-3">
        <div className="d-none d-md-block"></div>
        <div className="d-flex align-items-center">
          <div className="profile-image"></div>
          <h4 className="ml-3 m-0">Hi, Anthony!</h4>
        </div>
        <button className="btn" onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>
    </Nav>
  );
}
