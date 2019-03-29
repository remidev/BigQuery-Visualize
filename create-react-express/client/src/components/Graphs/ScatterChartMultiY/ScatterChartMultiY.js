import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  ScatterChart,
  Scatter,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend
} from "recharts";

class ScatterChartMultiY extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data01: [],
      data02: [],
    };
  }

  componentDidMount(){
    this.setState({
      data: this.props.chart
    })
    // console.log(this.props)
  }

  render() {
    return (
      <ScatterChart
        width={600}
        height={300}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis type="number" dataKey={"x"} name="stature" unit="cm" />
        <CartesianGrid />
        <YAxis
          yAxisId="left"
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          stroke="#8884d8"
        />
        <YAxis
          yAxisId="right"
          type="number"
          dataKey="y"
          name="weight"
          unit="kg"
          orientation="right"
          stroke="#82ca9d"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter yAxisId="left" name="A school" data={this.state.data} fill="#8884d8" />
        <Scatter yAxisId="right" name="A school" data={this.state.data1} fill="#82ca9d" />
        {/* More Data Data1 */}
      </ScatterChart>
    );
  }
}

export default ScatterChartMultiY;
