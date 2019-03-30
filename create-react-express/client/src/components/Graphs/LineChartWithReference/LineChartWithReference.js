import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";

class LineChartWithReference extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      XAxis: "",
      dataKeyX: "",
      dataKeyY: "",
      MaxValue: "",
      MinValue:"",
    };
  }

  componentDidMount() {
    for (var key in this.props.chart[0]) {
      if (Object.prototype.hasOwnProperty.call(this.props.chart[0], key)) {
        var val = this.props.chart[0];
        var AxisName = Object.keys(val)[0];
        var TempDataKeyX = Object.keys(val)[1];
        var TempDataKeyY = Object.keys(val)[2];

        if (!TempDataKeyX) TempDataKeyX = "";
        if (!TempDataKeyY) TempDataKeyY = "";

        this.setState({
          data: this.props.chart,
          XAxis: AxisName,
          dataKeyX: TempDataKeyX,
          dataKeyY: TempDataKeyY
        });
      }
    }

      delete val[Object.keys(val)];
      console.log(val);
      var arr = Object.keys(val).map(function(key) {
        console.log(val[key]);
        return val[key];
      });
      var max = Math.max.apply(null, arr);
      var min = Math.min.apply(null, arr);
      this.setState({
        MaxValue: max,
        MinValue: min,
      });
      console.log("Min value: " + min + ", max value: " + max);

    console.log(TempDataKeyX);
    console.log(TempDataKeyY);
  }

  render() {
    return (
      <LineChart
        width={700}
        height={400}
        data={this.state.data}
        margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={this.state.XAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={this.state.MinValue} stroke="red" label="Min" />
        <ReferenceLine y={this.state.MaxValue} label="Max" stroke="red" />
        <Line type="monotone" dataKey={this.state.dataKeyY} stroke="#8884d8" />
        <Line type="monotone" dataKey={this.state.dataKeyX} stroke="#82ca9d" />
        <Brush />
      </LineChart>
    );
  }
}

export default LineChartWithReference;
