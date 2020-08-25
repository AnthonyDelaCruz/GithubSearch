import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #9bc2cf;
  display: flex;

  span,
  h4 {
    color: #334045;
    font-weight: bold;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <div className="d-flex align-items-center justify-content-between w-100 px-md-5 py-md-3">
        <div></div>
        <div className="d-flex align-items-center">
          <div
            className="profile-image"
            style={{
              height: 60,
              width: 60,
              background: "#000000",
              borderRadius: "50%",
            }}
          ></div>
          <h4 className="ml-3 m-0">Hi, Anthony!</h4>
        </div>
        <Link to="/sample">
          <span>Logout</span>
        </Link>
      </div>
    </Nav>
  );
}
