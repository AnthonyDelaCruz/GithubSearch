import React from "react";
import styled from "styled-components";
import { breakpoints } from "../constants";

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
  @media only screen and (max-width: ${breakpoints.tablet}) {
    justify-content: space-evenly;
    .follower__name-email {
      padding: 0 1rem;
      p {
        word-break: break-word;
      }
    }
  }
`;
export default function Followers({ followers }) {
  return (
    <FollowersWrapper className="w-100">
      {followers.length ? (
        followers.map(({ avatar_url, login, html_url }) => (
          <Follower key={avatar_url} className="followers__info d-flex py-3">
            <img src={avatar_url} alt={login} />
            <div className="follower__name-email ml-md-3">
              <h5>{login}</h5>
              <p className="text-muted">{html_url}</p>
            </div>
          </Follower>
        ))
      ) : (
        <div className="h-100 d-flex justify-content-center align-items-center">
          <h4>User has no followers.</h4>
        </div>
      )}
    </FollowersWrapper>
  );
}
