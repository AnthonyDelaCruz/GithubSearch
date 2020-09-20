import React from "react";
import styled from "styled-components";
import {
  FaLocationArrow,
  FaLink,
  FaBuilding,
  FaCalendar,
} from "react-icons/fa";
import { breakpoints } from "../constants";
import Button from "components/Button";

const UserInfostyledDiv = styled.div`
  padding: 10px;
  .text {
    color: ${(props) => props.isLoading && "transparent"};
  }
  .img__container {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .user-bio {
    font-size: 1.2rem;
  }
  .user__info-icons {
    color: #cecece;
  }
  .hireable-status {
    padding: 6px;
    border-radius: 5px;
    color: #ffffff;
  }
  .hireable-status--true {
    background-color: #00c400;
  }
  .hireable-status--false {
    background-color: #ff4d4d;
  }
  button {
    border-color: #ffffff;
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    .avatar-container,
    button {
      width: 100%;
    }
  }
`;
let emptyVal = "N/A";
export default function UserInfo({
  name,
  avatar_url,
  email,
  company,
  location,
  blog,
  bio,
  created_at,
  hireable,
  loading,
}) {
  const isAnimated = loading && "animate";
  return (
    <UserInfostyledDiv isLoading={loading}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex avatar-container">
          <div className={`${isAnimated} img__container`}>
            <img
              className={loading && "hideOnLoad"}
              src={avatar_url}
              alt={name}
            />
          </div>
          <div className="ml-3 d-flex flex-column justify-content-center">
            <h3 className={`m-0 text ${isAnimated}`}>{name}</h3>
            {email && <span className={`text ${isAnimated}`}>{email}</span>}
          </div>
        </div>
        <Button className="mt-4 mt-md-0">Follow</Button>
      </div>
      {bio && (
        <div className={`mt-3 py-3 user-bio text ${isAnimated}`}>{bio}</div>
      )}
      <div>
        <div
          className={`my-2 ${isAnimated}`}
          style={{
            width: isAnimated && "20%",
          }}
        >
          <span
            style={{
              visibility: isAnimated && "hidden",
            }}
            className={`hireable-status hireable-status--${
              hireable ? "true" : "false"
            }`}
          >
            {hireable ? "Hireable" : "Not hireable"}
          </span>
        </div>
        <div className="mb-">
          <FaLocationArrow className="user__info-icons" size={20} />{" "}
          <span className={`ml-2 text ${isAnimated}`}>
            {location || emptyVal}
          </span>
        </div>
        <div className="mb-2">
          <FaBuilding className="user__info-icons" size={20} />{" "}
          <span className={`ml-2 text ${isAnimated}`}>
            {company || emptyVal}
          </span>
        </div>
        <div className="mb-2">
          <FaLink className="user__info-icons" size={20} />
          <span className={`ml-2 ${isAnimated}`}>
            <a className="text" href={blog}>
              {blog || emptyVal}
            </a>
          </span>
        </div>
        <div className="mb-2">
          <FaCalendar className="user__info-icons" size={20} />{" "}
          <span className={`ml-2 text ${isAnimated}`}>{created_at}</span>
        </div>
      </div>
    </UserInfostyledDiv>
  );
}
