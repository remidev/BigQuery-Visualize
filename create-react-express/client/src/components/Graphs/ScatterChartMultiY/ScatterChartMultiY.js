import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  ScatterChart,
  Scatter,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
  // Legend
} from "recharts";

class ScatterChartMultiY extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: [],
      width: 0,
      height: 0,
      XAxis: "",
      dataKeyX: "",
      dataKeyY: ""
    };
  }

  componentDidMount() {
    for (var key in this.props.chart[0]) {
      if (Object.prototype.hasOwnProperty.call(this.props.chart[0], key)) {
        var val = this.props.chart[0];
        var AxisName = Object.keys(val)[0];
        var TempDataKeyX = Object.keys(val)[1];
        var TempDataKeyY = Object.keys(val)[2];
      }
    }
    if (!TempDataKeyX) TempDataKeyX = "";
    if (!TempDataKeyY) TempDataKeyY = "";

    this.setState({
      data: this.props.chart,
      height: this.props.height,
      width: this.props.width,
      XAxis: AxisName,
      dataKeyX: TempDataKeyX,
      dataKeyY: TempDataKeyY
    });
  }

  render() {
    return (
      <ScatterChart
        width={this.state.width}
        height={this.state.height}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis
          type="number"
          dataKey={this.state.dataKeyX}
          name={this.state.dataKeyX}
        />
        <CartesianGrid />
        <YAxis
          yAxisId="left"
          type="number"
          dataKey={this.state.XAxis}
          stroke="#8884d8"
        />
        <YAxis
          yAxisId="right"
          type="number"
          dataKey={this.state.XAxis}
          orientation="right"
          stroke="#82ca9d"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter
          yAxisId="left"
          name="A school"
          data={this.state.data}
          fill="#8884d8"
        />
        <Scatter
          yAxisId="right"
          name="A school"
          data={this.state.data1}
          fill="#82ca9d"
        />
        {/* More Data Data1 */}
      </ScatterChart>
    );
  }
}

export default ScatterChartMultiY;
