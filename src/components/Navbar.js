import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import { breakpoints } from "../constants";

const Nav = styled.div`
  background-color: var(--light-black);
  display: flex;
  padding: 0.625rem;
  span {
    color: #fff;
    font-weight: bold;
  }
  .profile-image {
    height: 40px;
    width: 40px;
    background-color: #000000;
    border-radius: 50%;
    object-fit: contain;
  }
  button {
    &:focus {
      outline: none;
      box-shadow: unset;
    }
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
  const handleLogout = () => {
    logout();
  };
  if (!isAuthenticated) return null;

  return (
    <Nav>
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="d-none d-md-block"></div>
        <div className="d-flex align-items-center">
          <img
            alt="profile-avatar"
            src={user.picture}
            className="profile-image"
          />
          <span className="ml-3 m-0">Hi, {user.name}!</span>
        </div>
        <button className="btn" onClick={handleLogout}>
          <span>Logout</span>
        </button>
      </div>
    </Nav>
  );
}
