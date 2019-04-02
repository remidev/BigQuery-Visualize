import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";

class ComposedVerticalLineBarChart extends React.Component {
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
      <ComposedChart
        layout="vertical"
        width={this.state.width}
        height={this.state.height}
        data={this.state.data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey={this.state.XAxis} type="category" />
        <Tooltip />
        <Legend />
        <Area dataKey={this.state.dataKeyZ} fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey={this.state.dataKeyY} barSize={25} fill="#413ea0" />
        <Line dataKey={this.state.dataKeyX} stroke="#ff7300" />
        <Brush />
      </ComposedChart>
    );
  }
}

export default ComposedVerticalLineBarChart;
