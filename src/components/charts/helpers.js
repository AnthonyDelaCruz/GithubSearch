// Create a JSON object to store the chart configurations
export const chartConfigs = (
  type = "column2d",
  chartData,
  chartConfig = {},
  width = "100%",
  height = "auto"
) => {
  return {
    type, // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        ...chartConfig,
        theme: "fusion", //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData,
    },
  };
};

export const chartData = [
  {
    label: "Venezuela",
    value: "290",
  },
  {
    label: "Saudi",
    value: "260",
  },
  {
    label: "Canada",
    value: "180",
  },
  {
    label: "Iran",
    value: "140",
  },
  {
    label: "Russia",
    value: "115",
  },
  {
    label: "UAE",
    value: "100",
  },
  {
    label: "US",
    value: "30",
  },
  {
    label: "China",
    value: "30",
  },
];
