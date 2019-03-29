import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";

class SimpleLineChart extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      data: [],
      width: 600,
      height: 300,
      dataKeyX: "",
      dataKeyY: ""
    };
  }

  componentDidMount() {
    for (var key in this.props.chart[0]) {
      if (Object.prototype.hasOwnProperty.call(this.props.chart[0], key)) {
        var val = this.props.chart[0];
        var TempDataKeyX = Object.keys(val)[0];
        var TempDataKeyY = Object.keys(val)[1];
      }
    }
    if (!TempDataKeyX) TempDataKeyX = "";
    if (!TempDataKeyY) TempDataKeyY = "";

    console.log(TempDataKeyX);
    console.log(TempDataKeyY);

    this.setState({
      data: this.props.chart,
      dataKeyX: TempDataKeyX,
      dataKeyY: TempDataKeyY
    });
    console.log(TempDataKeyX);
    console.log(TempDataKeyY);
  }

  render() {
    return (
      <LineChart
        width={this.state.width}
        height={this.state.height}
        data={this.state.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={this.state.dataKeyX}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={this.state.dataKeyY} stroke="#82ca9d" />
        <Brush />
      </LineChart>
    );
  }
}

export default SimpleLineChart;
