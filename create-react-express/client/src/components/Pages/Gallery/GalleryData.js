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
      return (
      <div>
      <div> <h1 className="text-center">Simple Line Chart</h1><SimpleLineChart chart={this.data}/></div><hr></hr>  
      {/* <div> <h1 className="text-center">Negative Line Chart</h1><CanNegativeChart chart={this.data} /></div><hr></hr>  */}
      {/* FIX CAN NEGATIVE */}
      <div> <h1 className="text-center">Line Chart With Reference</h1><LineChartWithReference chart={this.data}/></div><hr></hr>
      <div> <h1 className="text-center">Biaxial Line Chart</h1> <BiaxialLineChart chart={this.data} /></div><hr></hr>
      </div>
       )
    },
    type: "LineChart",
    chartName: "Simple Line Chart"
  },
  
  // Mixed: { //WORKS
  //   id:4,
  //   data: [],
  //   chart() {
  //     return (
  //     <div>
  //     {/* <div> <h1 className="text-center">Combination Charts</h1> <ComboCharts chart={this.data}/></div>  */}
  //     {/* <div> <h1 className="text-center">Combination Bar Charts</h1> <BarChartMixed chart={this.data} /></div>  */} 
  //     {/* UP TO HERE ^ */}
  //     {/* <div> <h1 className="text-center">Composed Line-Bar Charts</h1> <ComposedLineBarChart chart={this.data}/></div> */}
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
