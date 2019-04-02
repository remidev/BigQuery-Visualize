import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

class ComboCharts extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: [],
      width: 0,
      height: 0,
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
      <div>
        <LineChart
          width={this.state.width}
          height={this.state.height}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.state.XAxis} />
          <YAxis />
          <Tooltip cursor={{ stroke: "red", strokeWidth: 2 }} />
          <Line
            type="monotone"
            dot={{ stroke: "red", strokeWidth: 2 }}
            dataKey={this.state.dataKeyY}
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>

        <LineChart
         width={this.state.width}
         height={this.state.height}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.state.XAxis} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={this.state.dataKeyY}
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </LineChart>

        <AreaChart
         width={this.state.width}
         height={this.state.height}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.state.XAxis} />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={this.state.dataKeyY}
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Brush />
          {/* Brush Controls All  */}
        </AreaChart>
      </div>
    );
  }
}

export default ComboCharts;
