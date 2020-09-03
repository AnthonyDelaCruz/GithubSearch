import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import HomeScreen from "screens/Home";

import Navbar from "components/Navbar";
import Wrapper from "components/Wrapper";

import LoginScreen from "screens/Login";
import ErrorScreen from "screens/Error";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LoginScreen} />
          <Route path="/home" exact component={HomeScreen} />
          <Route path="*" component={ErrorScreen} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
