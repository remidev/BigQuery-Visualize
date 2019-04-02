import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip
  //   Legend
} from "recharts";

class ScatterChartLabels extends React.Component {
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
          dataKey={this.state.dataKeyX}
          type="number"
          name={this.state.dataKeyX}
        />
        <YAxis
          dataKey={this.state.dataKeyY}
          type="number"
          name={this.state.dataKeyY}
        />
        <CartesianGrid />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="ScatterPlot" data={this.state.data} fill="#8884d8">
          <LabelList dataKey={this.state.dataKeyX} />
        </Scatter>
      </ScatterChart>
    );
  }
}

export default ScatterChartLabels;
