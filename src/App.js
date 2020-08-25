import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeScreen from "screens/Home";

import Navbar from "components/Navbar";
import Wrapper from "components/Wrapper";
import UserInfo from "components/BoxInfo";

import ErrorScreen from "screens/Error";
import { GithubUsersProvider, GithubUsersContext } from "./context";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <Wrapper>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/about" component={About} />
          <Route path="*" component={ErrorScreen} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

const About = () => (
  <div>
    <h1>ABOUT</h1>{" "}
  </div>
);
const Sample = () => (
  <div>
    <h1>SAMPLE</h1>
  </div>
);
export default App;
