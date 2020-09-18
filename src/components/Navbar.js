import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import { breakpoints } from "../constants";

const Nav = styled.div`
  background-color: #24292e;
  display: flex;
  span,
  h5 {
    color: #fff;
    font-weight: bold;
  }
  .profile-image {
    height: 50px;
    width: 50px;
    background-color: #000000;
    border-radius: 50%;
    object-fit: contain;
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
  const { logout, isAuthenticated, user } = useAuth0();
  const history = useHistory();
  const handleLogout = () => {
    logout();
  };
  if (!isAuthenticated) return null;

  return (
    <Nav>
      <div className="d-flex align-items-center justify-content-between w-100 p-3 px-md-5 py-md-3">
        <div className="d-none d-md-block"></div>
        <div className="d-flex align-items-center">
          <img src={user.picture} className="profile-image" />
          <h5 className="ml-3 m-0">Hi, {user.name}!</h5>
        </div>
        <button className="btn" onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>
    </Nav>
  );
}
