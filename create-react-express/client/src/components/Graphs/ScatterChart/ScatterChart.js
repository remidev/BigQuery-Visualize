import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
  //   Legend
} from "recharts";

class ScatterChartN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
      XAxis: AxisName,
      dataKeyX: TempDataKeyX,
      dataKeyY: TempDataKeyY
    });
  }

  render() {
    return (
      <ScatterChart
        width={700}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis dataKey={this.state.dataKeyX} type="number" name={this.state.dataKeyX} />
        <YAxis dataKey={this.state.dataKeyY} type="number" name={this.state.dataKeyY} />
        <Scatter name="ScatterPlot" data={this.state.data} fill="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    );
  }
}

export default ScatterChartN;
