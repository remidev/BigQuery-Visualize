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

class CanNegativeChart extends React.Component {
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
      IntE: ""
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

    if (isNaN(this.state.dataKeyX) === false) {
      this.setState({
        Int: this.state.dataKeyX
      });
    } else if (isNaN(this.state.dataKeyY) === false) {
      this.setState({
        Int: this.state.dataKeyY
      });
    } else {
      console.log("No Int Values");
    }
  }

  // gradientOffset = () => {
  //   const dataMax = Math.max(...this.state.data.map((i) => i.score));
  //   const dataMin = Math.min(...this.state.data.map((i) => i.score));

  //   console.log(dataMax, dataMin);
  //   if (dataMax <= 0) {
  //     return 0;
  //   } else if (dataMin >= 0) {
  //     return 1;
  //   } else {
  //     return dataMax / (dataMax - dataMin);
  //   }
  // };

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
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop
              // offset={this.gradientOffset()}
              stopColor="green"
              stopOpacity={1}
            />
            <stop
              // offset={this.gradientOffset()}
              stopColor="red"
              stopOpacity={1}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={this.state.IntE}
          stroke="#000"
          fill="url(#splitColor)"
        />
        <Brush />
      </AreaChart>
    );
  }
}

export default CanNegativeChart;
