import React from "react";
import styled from "styled-components";
import {
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
  display: flex;
  align-items: center;
  padding: 0.9375rem 0;
  background-color: #ffffff;

  p,
  span {
    margin: 0;
    font-size: 1.5rem;
    color: ${(props) => (props.isLoading ? "transparent" : "#000000")};
  }
  span {
    font-weight: bold;
  }
  @media only screen and (max-width: ${breakpoints.tablet}) {
    max-width: unset;
    border-radius: 0;
  }
`;

export default function BoxInfo({ iconName, count, label, loading }) {
  return (
    <Infobox isLoading={loading} className="info-box">
      <div className="text-center" style={{ flex: 0.5 }}>
        {itemIcons[iconName]}
      </div>
      <div style={{ flex: 1, paddingRight: 10 }}>
        <h5>{label}</h5>
        <p className={`${loading && "animate"}`}>{count}</p>
      </div>
    </Infobox>
  );
}
