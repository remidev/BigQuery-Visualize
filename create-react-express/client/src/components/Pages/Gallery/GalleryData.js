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
  LineChart: {
    //WORKS
    id: 1,
    data: [],
    chart() {
      return <SimpleLineChart chart={this.data} />;
    },
    type: "LineChart",
    chartName: "Simple Line Chart"
  },
  LineChart: {
    //WORKS
    id: 2,
    data: [],
    chart() {
      return <BiaxialLineChart chart={this.data} />;
    },
    type: "LineChart",
    chartName: "Biaxial Bar Chart"
  },
  LineChart: {
    //WORKS
    id: 3,
    data: [],
    chart() {
      return <LineChartWithReference chart={this.data} />;
    },
    type: "LineChart",
    chartName: "Line Chart With Reference"
  },
  Mixed: {
    //WORKS
    id: 4,
    data: [],
    chart() {
      return <ComboCharts chart={this.data} />;
    },
    type: "Mixed",
    chartName: "Combo Chart"
  },
  LineChart: {
    //DOES NOT WORK
    id: 5,
    data: [],
    chart() {
      return <ZoomChart chart={this.data} />;
    },
    type: "LineChart",
    chartName: "Zoom Line Chart"
  },
  AreaChart: {
    // WORKS
    id: 6,
    data: [],
    chart() {
      return <OverlayAreaChart chart={this.data} />;
    },
    type: "AreaChart",
    chartName: "Overlay Area Chart"
  },
  AreaChart: {
    // WORKS
    id: 7,
    data: [],
    chart() {
      return <PercentChart chart={this.data} />;
    },
    type: "AreaChart",
    chartName: "Percent Chart"
  },
  LineChart: {
    //WORKS
    id: 8,
    data: [],
    chart() {
      return <CanNegativeChart chart={this.data} />;
    },
    type: "LineChart",
    chartName: "Line Chart (Negatives)"
  },
  BarChart: {
    //WORKS
    id: 9,
    data: [],
    chart() {
      return <BarChartN chart={this.data} />;
    },
    type: "BarChart",
    chartName: "Simple Bar Chart"
  },
  BarChart: {
    //WORKS
    id: 10,
    data: [],
    chart() {
      return <BarChartStacked chart={this.data} />;
    },
    type: "BarChart",
    chartName: "Bar Chart Stacked"
  },
  BarChart: {
    //WORKS
    id: 11,
    data: [],
    chart() {
      return <BarChartMixed chart={this.data} />;
    },
    type: "BarChart",
    chartName: "Bar Chart Mixed"
  },
  BarChart: {
    //WORKS
    id: 12,
    data: [],
    chart() {
      return <CanNegativeBarChart chart={this.data} />;
    },
    type: "BarChart",
    chartName: "Bar Chart (Negatives)"
  },
  BarChart: {
    //WORKS
    id: 13,
    data: [],
    chart() {
      return <BiaxialBarChart chart={this.data} />;
    },
    type: "BarChart",
    chartName: "Biaxial Bar Chart"
  },
  DataChart: {
    // WORKS
    id: 14,
    data: [],
    chart() {
      return <ComposedDataChart chart={this.data} />;
    },
    type: "DataChart",
    chartName: "Composed Data Chart"
  },
  Mixed: {
    // WORKS
    id: 15,
    data: [],
    chart() {
      return <ComposedLineBarChart chart={this.data} />;
    },
    type: "Mixed",
    chartName: "Composed Line Bar Chart(H)"
  },
  Mixed: {
    id: 16,
    data: [],
    chart() {
      return <ComposedVerticalLineBarChart chart={this.data} />;
    },
    type: "Mixed",
    chartName: "Composed Line Bar Chart(V)"
  },
  PieChart: {
    //WORKS
    id: 17,
    data: [],
    chart() {
      return <PieChartN chart={this.data} />;
    },
    type: "PieChart",
    chartName: "Simple Pie Chart"
  },
  ScatterChart: {
    //WORKS
    id: 18,
    data: [],
    chart() {
      return <ScatterChartN chart={this.data} />;
    },
    type: "ScatterChart",
    chartName: "Simple Scatter Chart"
  },
  // ScatterPlotColor: {
  // id:19,
  //   chart: <ScatterPlotColor/>,
  //   type: "Scatter Chart",
  //   chartName: "Scatter Chart Color Coded",
  // },
  ScatterChart: {
    //WORKS
    id: 20,
    data: [],
    chart() {
      return <ScatterChartLabels chart={this.data} />;
    },
    type: "ScatterChart",
    chartName: "Scatter Chart Labeled"
  },
  ScatterChart: {
    //WORKS
    id: 21,
    data: [],
    chart() {
      return <ScatterChartMultiY chart={this.data} />;
    },
    type: "ScatterChart",
    chartName: "Scatter Chart (Multiple)"
  }
  // RadarChart: {
  //   id:22,
  //   data: [],
  //   chart() {
  //     return <RadarChartN chart={this.data} />
  //   },
  //   type: "RadarChart",
  //   chartName: "Radar Chart"
  // },
};
export default GalleryData;
