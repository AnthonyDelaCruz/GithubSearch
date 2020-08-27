import React from "react";
import styled from "styled-components";
import {
  FaBeer,
  FaFolderOpen,
  FaUsers,
  FaUserFriends,
  FaArchive,
} from "react-icons/fa";
import { breakpoints } from "../constants";

let size = 40;

const itemIcons = {
  repos: <FaFolderOpen color="#3D67AF" size={size} />,
  followers: <FaUsers color="#FE007F" size={size} />,
  following: <FaUserFriends color="#04E9C6" size={size} />,
  gists: <FaArchive color="#F3615C" size={size} />,
};

const Infobox = styled.div`
  border-radius: 10px;
  max-width: 23%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.9375rem 0;
  background-color: #ffffff;
  color: #9bc2cf;
  border: 1.5px solid #c1e1ec;
  h5 {
    color: #334045;
  }
  p,
  span {
    margin: 0;
    font-size: 1.5rem;
  }
  span {
    font-weight: bold;
  }

  @media only screen and (max-width: ${breakpoints.mobileS}) {
    max-width: unset;
    border-radius: 0;
  }
`;

export default function BoxInfo({ iconName, count, label }) {
  return (
    <Infobox className="info-box col-md-3 col-sm-12">
      <div>{itemIcons[iconName] || null}</div>
      <div>
        <h5>{label}</h5>
        <p>{count}</p>
      </div>
    </Infobox>
  );
}