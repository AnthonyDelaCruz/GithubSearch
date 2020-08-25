import React, { useContext } from "react";
import { GithubUsersContext } from "context";

import BoxInfo from "components/BoxInfo";
import CardInfo from "components/CardInfo";

export default function Home() {
  const { user } = useContext(GithubUsersContext);
  const { public_repos, followers, following, public_gists } = user;

  return (
    <section className="container">
      <div className="row py-md-5">
        <BoxInfo iconName="repos" count={public_repos} label="Public Repos" />
        <BoxInfo iconName="gists" count={public_gists} label="Public Gists" />
        <BoxInfo iconName="followers" count={followers} label="Followers" />
        <BoxInfo iconName="following" count={following} label="Following" />
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 card-info">
          <CardInfo cardTitle={user.name}>
            <h2>CHILD UI HERE</h2>
          </CardInfo>
        </div>
        <div className="col-sm-12 col-md-6 card-info">
          <CardInfo cardTitle="Followers">
            <h2>CHILD UI HERE</h2>
          </CardInfo>
        </div>
      </div>
    </section>
  );
}
