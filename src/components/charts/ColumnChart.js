import React from "react";
import ReactFC from "react-fusioncharts";

import { chartConfigs } from "./helpers";

export default function ColumnChart({ chartData }) {
  const chartConfig = {
    caption: "Most starred repos",
    subCaption: "Top 5",
    xAxisName: "Repositories",
    yAxisName: "Stars",
  };
  return <ReactFC {...chartConfigs("column2d", chartData, chartConfig)} />;
}
