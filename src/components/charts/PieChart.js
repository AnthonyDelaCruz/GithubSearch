import React from "react";
import ReactFC from "react-fusioncharts";

import { chartConfigs } from "./helpers";

const PieChart = ({ chartData }) => {
  const chartConfig = {
    caption: "Top 5 Languages",
    decimals: 0,
  };
  return <ReactFC {...chartConfigs("pie2d", chartData, chartConfig)} />;
};

export default PieChart;
