import React from "react";
import ReactFC from "react-fusioncharts";

import { chartConfigs } from "./helpers";

export default function BarChart({ chartData }) {
  const chartConfig = {
    caption: "Most forked repos",
    subCaption: "Top 5",
  };
  return <ReactFC {...chartConfigs("bar2d", chartData, chartConfig)} />;
}
