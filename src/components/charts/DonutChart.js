import React from "react";
import ReactFC from "react-fusioncharts";

import { chartConfigs } from "./helpers";

const DonutChart = ({ chartData }) => {
  const chartConfig = {
    caption: "Stars per Language used.",
    subCaption: "Top 5",
    decimals: 0,
    showPercentValues: 0,
  };
  return <ReactFC {...chartConfigs("doughnut2d", chartData, chartConfig)} />;
};

export default DonutChart;
