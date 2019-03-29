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
<<<<<<< HEAD
      return <SimpleLineChart chart={this.data} />;
=======
      return (
      <div>
      <div> <h1 className="text-center">Simple Line Chart</h1><SimpleLineChart chart={this.data}/></div><hr></hr> 
      {/* <div> <h1 className="text-center">Negative Line Chart</h1><CanNegativeChart chart={this.data} /></div><hr></hr> */}
      {/* <div> <h1 className="text-center">Line Chart With Reference</h1><LineChartWithReference chart={this.data}/></div><hr></hr>
      <div> <h1 className="text-center">Biaxial Line Chart</h1> <BiaxialLineChart chart={this.data} /></div><hr></hr> */}
      </div>
       )
>>>>>>> 67b972cb6c6c24861cbe06394e0217eb12e78ee2
    },
    type: "LineChart",
    chartName: "Simple Line Chart"
  },
<<<<<<< HEAD
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
=======
  
  // Mixed: { //WORKS
  //   id:4,
  //   data: [],
  //   chart() {
  //     return (
  //     <div>
  //     <div> <h1 className="text-center">Combination Charts</h1> <ComboCharts chart={this.data}/></div> 
  //     <div> <h1 className="text-center">Combination Bar Charts</h1> <BarChartMixed chart={this.data} /></div>
  //     <div> <h1 className="text-center">Composed Line-Bar Charts</h1> <ComposedLineBarChart chart={this.data}/></div>
  //     <div> <h1 className="text-center">Composed Vertical Line Charts</h1> <ComposedVerticalLineBarChart chart={this.data}/></div>
  //     </div>
  //     )
  //   },
  //   type: "Mixed",
  //   chartName: "Combo Chart"
  // },
  // AreaChart: { // WORKS
  //   id:6,
  //   data: [],
  //   chart() {
  //     return (
  //     <div>
  //     <div> <h1 className="text-center">Overlay Area Chart</h1> <OverlayAreaChart chart={this.data}/></div>  
  //     <div> <h1 className="text-center">Percent Chart</h1> <PercentChart chart={this.data}/></div>
  //     </div>
  //     )
  //   },
  //   type: "AreaChart",
  //   chartName: "Overlay Area Chart"
  // },
 
  // BarChart:{ //WORKS
  //   id:9,
  //   data: [],
  //   chart() {
  //     return (
  //     <div>
  //     <div> <h1 className="text-center">Simple Bar Chart</h1> <BarChartN chart={this.data} /></div>  
  //     <div> <h1 className="text-center">Stacked Bar Chart</h1> <BarChartStacked chart={this.data} /></div>
  //     <div> <h1 className="text-center">Negative Bar Chart</h1><CanNegativeBarChart chart={this.data} /></div>
  //     <div> <h1 className="text-center">Biaxial Chart</h1> <BiaxialBarChart chart={this.data} /></div>
  //     </div>
  //     )
  //   },
  //   type: "BarChart",
  //   chartName: "Simple Bar Chart"
  // },
  // DataChart: { // WORKS
  //   id:14,
  //   data: [],
  //   chart() {
  //     return (
  //     <div>
  //     <h1 className="text-center">Composed Data Chart</h1> <ComposedDataChart chart={this.data} />
  //     </div>
  //     )
  //   },
  //   type: "DataChart",
  //   chartName: "Composed Data Chart"
  // },
  // PieChart:{ //WORKS
  //   id:17,
  //   data: [],
  //   chart() {
  //     return (
  //       <div>
  //       <h1 className="text-center">Simple Pie Chart</h1> <PieChartN chart={this.data} />
  //       </div>
  //       )
  //   },
  //   type: "PieChart",
  //   chartName: "Simple Pie Chart"
  // },
  // ScatterChart: {
  //   //WORKS
  //   id: 18,
  //   data: [],
  //   chart() {
  //     return (
  //       <div>
  //       <div>  <h1 className="text-center">Simple ScatterChart</h1> <ScatterChartN chart={this.data} /></div>  
  //       <div>  <h1 className="text-center">Simple ScatterChart Labeled</h1> <ScatterChartLabels chart={this.data} /></div>
  //       <div>  <h1 className="text-center">Scatter Chart Multiple Values</h1> <ScatterChartMultiY chart={this.data} /></div>
  //       </div>
  //     )
  //   },
  //   type: "ScatterChart",
  //   chartName: "Simple Scatter Chart"
  // },
  // // ScatterPlotColor: {
  //   // id:19,
  // //   chart: <ScatterPlotColor/>,
  // //   type: "Scatter Chart",
  // //   chartName: "Scatter Chart Color Coded",
  // // },
>>>>>>> 67b972cb6c6c24861cbe06394e0217eb12e78ee2
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
