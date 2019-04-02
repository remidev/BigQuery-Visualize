import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";

class BarChartMixed extends React.Component {
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
      <BarChart
        width={this.state.width}
        height={this.state.height}
        data={this.state.data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={this.state.XAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={this.state.dataKeyX} stackId="a" fill="#8884d8" />
        <Bar dataKey={this.state.dataKeyY} stackId="a" fill="#82ca9d" />
        <Bar dataKey={this.state.dataKeyY} fill="#ffc658" />
        <Brush />
      </BarChart>
    );
  }
}

export default BarChartMixed;
