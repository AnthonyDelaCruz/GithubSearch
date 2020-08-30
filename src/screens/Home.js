import React, { useContext } from "react";
import { GithubUsersContext } from "context";

import BoxInfo from "components/BoxInfo";
import CardInfo from "components/CardInfo";
import UserInfo from "components/UserInfo";
import Followers from "components/Followers";

export default function Home() {
  const { user, followers: followers_arr } = useContext(GithubUsersContext);
  const { public_repos, followers, following, public_gists } = user;
  return (
    <section className="home-screen container">
      <div className="boxes-container py-md-5">
        <BoxInfo iconName="repos" count={public_repos} label="Public Repos" />
        <BoxInfo iconName="gists" count={public_gists} label="Public Gists" />
        <BoxInfo iconName="followers" count={followers} label="Followers" />
        <BoxInfo iconName="following" count={following} label="Following" />
      </div>
      <div className="cards-container">
        <div className="card-info">
          <CardInfo cardTitle="User">
            <UserInfo {...user} />
          </CardInfo>
        </div>
        <div className="card-info">
          <CardInfo cardTitle={`Followers (${followers_arr.length})`}>
            <Followers followers={followers_arr} />
          </CardInfo>
        </div>
      </div>
    </section>
  );
}
