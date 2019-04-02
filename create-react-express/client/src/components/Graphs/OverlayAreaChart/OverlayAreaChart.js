import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush
} from "recharts";

class OverlayAreaChart extends React.Component {
  //3 Contents
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: [],
      width: 0,
      height: 0,
      XAxis: "",
      dataKeyX: "",
      dataKeyY: "",
      dataKeyZ: ""
    };
  }

  componentDidMount() {
    for (var key in this.props.chart[0]) {
      if (Object.prototype.hasOwnProperty.call(this.props.chart[0], key)) {
        var val = this.props.chart[0];
        var AxisName = Object.keys(val)[0];
        var TempDataKeyX = Object.keys(val)[1];
        var TempDataKeyY = Object.keys(val)[2];
        var TempDataKeyZ = Object.keys(val)[3];
      }
    }
    if (!TempDataKeyX) TempDataKeyX = "";
    if (!TempDataKeyY) TempDataKeyY = "";
    if (!TempDataKeyZ) TempDataKeyZ = "";

    this.setState({
      data: this.props.chart,
      height: this.props.height,
      width: this.props.width,
      XAxis: AxisName,
      dataKeyX: TempDataKeyX,
      dataKeyY: TempDataKeyY,
      dataKeyZ: TempDataKeyZ
    });
  }

  render() {
    return (
      <AreaChart
        width={this.state.width}
        height={this.state.height}
        data={this.state.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={this.state.XAxis} />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={this.state.dataKeyX}
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey={this.state.dataKeyY}
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey={this.state.dataKeyZ}
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Brush />
      </AreaChart>
    );
  }
}

export default OverlayAreaChart;
