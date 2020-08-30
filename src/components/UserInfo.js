import React from "react";
import styled from "styled-components";
import {
  FaLocationArrow,
  FaLink,
  FaBuilding,
  FaCalendar,
} from "react-icons/fa";
import { breakpoints } from "../constants";

const UserInfostyledDiv = styled.div`
  padding: 10px;

  img {
    height: 80px;
    width: 80px;
  }
  .user-bio {
    font-size: 1.2rem;
  }
  .user__info-icons {
    color: #cecece;
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    .avatar-container,
    button {
      width: 100%;
    }
  }
`;

export default function UserInfo({
  name,
  avatar_url,
  email,
  company,
  location,
  blog,
  bio,
  created_at,
}) {
  return (
    <UserInfostyledDiv>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex avatar-container">
          <img src={avatar_url} alt={name} />
          <div className="ml-3 d-flex flex-column justify-content-center">
            <h3 className="m-0">{name}</h3>
            <span className="text-muted">tony@gmail.com</span>
            {email && <span>{email}</span>}
          </div>
        </div>
        <button className="btn btn-primary mt-4 mt-md-0">Follow</button>
      </div>
      <div className="mt-3 py-3 user-bio">{bio}</div>
      <div>
        <div className="mb-2">
          <FaLocationArrow className="user__info-icons" size={20} />{" "}
          <span className="ml-2">{location}</span>
        </div>
        <div className="mb-2">
          <FaBuilding className="user__info-icons" size={20} />{" "}
          <span className="ml-2">{company}</span>
        </div>
        <div className="mb-2">
          <FaLink className="user__info-icons" size={20} />
          <span className="ml-2">
            <a href={blog}>{blog}</a>
          </span>
        </div>
        <div className="mb-2">
          <FaCalendar className="user__info-icons" size={20} />{" "}
          <span className="ml-2">{created_at}</span>
        </div>
      </div>
    </UserInfostyledDiv>
  );
}
