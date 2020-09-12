import React, { useContext, useEffect } from "react";
import { GithubUsersContext, AuthContext } from "context";
import { useHistory } from "react-router-dom";

import BoxInfo from "components/BoxInfo";
import CardInfo from "components/CardInfo";
import UserInfo from "components/UserInfo";
import Followers from "components/Followers";
import SearchComponent from "components/SearchInput";
import PieChart from "components/charts/PieChart";
import DonutChart from "components/charts/DonutChart";
import ColumnChart from "components/charts/ColumnChart";
import BarChart from "components/charts/BarChart";

import {
  transformChartDataRepos,
  transformChartDataStars,
  transformChartDataPopularRepos,
  transformChartDataMostForked,
} from "utils";

export default function Home() {
  const {
    user,
    followers: followers_arr,
    repos,
    rateLimit,
    error,
    handleSearchUser,
    loading,
  } = useContext(GithubUsersContext);
  const { isLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  const { public_repos, followers, following, public_gists } = user;

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
  }, []);

  if (!isLoggedIn) return null;
  return (
    <section className="home-screen container">
      <SearchComponent
        handleSearchUser={handleSearchUser}
        rateLimit={rateLimit}
        error={error}
      />
      <div className="boxes-container mb-4">
        <BoxInfo
          iconName="repos"
          loading={loading}
          count={public_repos}
          label="Public Repos"
        />
        <BoxInfo
          iconName="gists"
          loading={loading}
          count={public_gists}
          label="Public Gists"
        />
        <BoxInfo
          iconName="followers"
          loading={loading}
          count={followers}
          label="Followers"
        />
        <BoxInfo
          iconName="following"
          loading={loading}
          count={following}
          label="Following"
        />
      </div>
      <div className="cards-container mb-4">
        <div className="card-info">
          <CardInfo cardTitle="User">
            <UserInfo {...user} loading={loading} />
          </CardInfo>
        </div>
        <div className="card-info">
          <CardInfo cardTitle={`Followers (${followers_arr.length})`}>
            <Followers followers={followers_arr} />
          </CardInfo>
        </div>
      </div>
      <div className="charts-container mb-4">
        <div className="charts-grid">
          <div className="mb-4 mb-md-4 mb-lg-0">
            <PieChart chartData={transformChartDataRepos(repos)} />
          </div>
          <ColumnChart chartData={transformChartDataPopularRepos(repos)} />
        </div>
        <div className="charts-grid my-4">
          <div className="mb-4 mb-md-4 mb-lg-0">
            <DonutChart chartData={transformChartDataStars(repos)} />
          </div>
          <BarChart chartData={transformChartDataMostForked(repos)} />
        </div>
      </div>
    </section>
  );
}
