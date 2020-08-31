import React from "react";
import ReactFC from "react-fusioncharts";

import { chartConfigs } from "./helpers";

const PieChart = ({ chartData }) => {
  const chartConfig = {
    caption: "Languages",
    subCaption: "top 5",
    decimals: 0,
  };
  return <ReactFC {...chartConfigs("pie2d", chartData, chartConfig)} />;
};

export default PieChart;
