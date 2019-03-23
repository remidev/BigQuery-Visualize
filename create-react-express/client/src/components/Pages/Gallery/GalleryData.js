import React from "react";
import SimpleLineChart from "../../Graphs/LineChart/LineChart";
import BiaxialLineChart from "../../Graphs/BiaxialLineChart/BiaxialLineChart";
import LineChartWithReference from "../../Graphs/LineChartWithReference/LineChartWithReference";
import ComboCharts from "../../Graphs/ComboCharts/ComboCharts";
import ZoomChart from "../../Graphs/ZoomChart/ZoomChart";
import OverlayAreaChart from "../../Graphs/OverlayAreaChart/OverlayAreaChart";
import PercentChart from "../../Graphs/PercentChart/PercentChart";
import CanNegativeChart from "../../Graphs/CanNegativeChart/CanNegativeChart";
import BarChartN from "../../Graphs/BarChart/BarChart";
import BarChartStacked from "../../Graphs/BarChartStacked/BarChartStacked";
import BarChartMixed from "../../Graphs/BarChartMixed/BarChartMixed";
import CanNegativeBarChart from "../../Graphs/CanNegativeBarChart/CanNegativeBarChart";
import BiaxialBarChart from "../../Graphs/BiaxialBarChart/BiaxialBarChart";
import ComposedDataChart from "../../Graphs/ComposedDataChart/ComposedDataChart";
import ComposedLineBarChart from "../../Graphs/ComposedLineBarChart/ComposedLineBarChart";
import ComposedVerticalLineBarChart from "../../Graphs/ComposedVerticalLineBarChart/ComposedVerticalLineBarChart";
import PieChartN from "../../Graphs/PieChart/PieChart";
// import PieRadialChart from "../../Graphs/PieRadialChart/PieRadialChart";
import ScatterChartN from "../../Graphs/ScatterChart/ScatterChart";
import ScatterChartLabels from "../../Graphs/ScatterChartLabels/ScatterChartLabels";
import ScatterChartMultiY from "../../Graphs/ScatterChartMultiY/ScatterChartMultiY";
import RadarChartN from "../../Graphs/RadarChart/RadarChart";
// import ScatterPlotColor from "../../Graphs/d3ScatterPlot/d3ScatterPlot";

const GalleryData = {
  SimpleLineChart: {
    id:1,
    chart: <SimpleLineChart />,
    type: "LineChart",
    chartName: "Simple Line Chart"
  },
  BiaxialBarChart: {
    id:2,
    chart: <BiaxialLineChart />,
    type: "BarChart",
    chartName: "Biaxial Bar Chart"
  },
  LineChartWithReference: {
    id:3,
    chart: <LineChartWithReference />,
    type: "LineChart",
    chartName: "Line Chart With Reference"
  },
  ComboCharts: {
    id:4,
    chart: <ComboCharts />,
    type: "Mixed",
    chartName: "Combo Chart"
  },
  ZoomChart: {
    id:5,
    chart: <ZoomChart />,
    type: "LineChart",
    chartName: "Zoom Line Chart"
  },
  OverlayAreaChart: {
    id:6,
    chart: <OverlayAreaChart />,
    type: "AreaChart",
    chartName: "Overlay Area Chart"
  },
  PercentChart: {
    id:7,
    chart: <PercentChart />,
    type: "AreaChart",
    chartName: "Percent Chart"
  },

  CanNegativeChart: {
    id:8,
    chart: <CanNegativeChart />,
    type: "LineChart",
    chartName: "Line Chart (Negatives)"
  },
  BarChartN:{
    id:9,
    chart: <BarChartN/>,
    type: "BarChart",
    chartName: "Simple Bar Chart",
  },
  BarChartStacked: {
    id:10,
    chart: <BarChartStacked/>,
    type: "BarChart",
    chartName: "Bar Chart Stacked",
  },
  BarChartMixed: {
    id:11,
    chart: <BarChartMixed/>,
    type: "BarChart",
    chartName: "Bar Chart Mixed",
  },
  CanNegativeBarChart: {
    id:12,
    chart: <CanNegativeBarChart/>,
    type: "BarChart",
    chartName: "Bar Chart (Negatives)",
  },
  BiaxialBarChart: {
    id:13,
    chart: <BiaxialBarChart/>,
    type: "BarChart",
    chartName: "Biaxial Bar Chart",
  },
  ComposedDataChart: {
    id:14,
    chart: <ComposedDataChart/>,
    type: "DataChart",
    chartName: "Composed Data Chart",
  },
  ComposedLineBarChart: {
    id:15,
    chart: <ComposedLineBarChart/>,
    type: "Mixed",
    chartName: "Composed Line Bar Chart(H)",
  },
  ComposedVerticalLineBarChart: {
    id:16,
    chart:<ComposedVerticalLineBarChart/>,
    type: "Mixed",
    chartName: "Composed Line Bar Chart(V)",
  },
  PieChartN:{
    id:17,
    chart: <PieChartN/>,
    type: "PieChart",
    chartName: "Simple Pie Chart",
  },
  ScatterChartN: {
    id:18,
    chart: <ScatterChartN/>,
    type: "ScatterChart",
    chartName: "Simple Scatter Chart",
  },
  // ScatterPlotColor: {
    // id:19,
  //   chart: <ScatterPlotColor/>,
  //   type: "Scatter Chart",
  //   chartName: "Scatter Chart Color Coded",
  // },
  ScatterChartLabels: {
    id:20,
    chart: <ScatterChartLabels/>,
    type: "ScatterChart",
    chartName: "Scatter Chart Labeled",
  },
  ScatterChartMultiY: {
    id:21,
    chart: <ScatterChartMultiY/>,
    type: "ScatterChart",
    chartName: "Scatter Chart (Multiple)",
  },
  RadarChartN: {
    id:22,
    chart: <RadarChartN />,
    type: "RadarChart",
    chartName: "Radar Chart"
  },
};
export default GalleryData;
