import React from "react";
import styled from "styled-components";

const FollowersWrapper = styled.div`
  img {
    height: 60px;
  }
  height: 100%;
  overflow: auto;
`;
const Follower = styled.div`
  align-items: center;
  h5,
  p {
    margin: 0;
  }
  border-bottom: 1px solid #cdcdcd;
`;
export default function Followers({ followers }) {
  return (
    <FollowersWrapper className="w-100">
      {followers.map(({ avatar_url, login, html_url }) => (
        <Follower className="d-flex py-3">
          <img src={avatar_url} alt={login} />
          <div className="ml-md-3">
            <h5>{login}</h5>
            <p className="text-muted">{html_url}</p>
          </div>
        </Follower>
      ))}
    </FollowersWrapper>
  );
}
