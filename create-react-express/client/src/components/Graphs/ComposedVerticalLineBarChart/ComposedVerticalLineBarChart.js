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
    this.state={
     data: [],
    }
  }
  
  componentDidMount() {
    for (var key in this.props.chart[0]) {
      if (Object.prototype.hasOwnProperty.call(this.props.chart[0], key)) {
        var val = this.props.chart[0];
        var TempDataKeyX = Object.keys(val)[0];
        var TempDataKeyY = Object.keys(val)[1];
        var TempDataKeyZ = Object.keys(val)[2];
      }
    }
    if (!TempDataKeyX) TempDataKeyX = "";
    if (!TempDataKeyY) TempDataKeyY = "";
    if (!TempDataKeyZ) TempDataKeyZ = "";

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
      <ComposedChart
        layout="vertical"
        width={600}
        height={300}
        data={this.state.data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Area dataKey="z" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="y" barSize={20} fill="#413ea0" />
        <Line dataKey="x" stroke="#ff7300" />
        <Brush/>
      </ComposedChart>
    );
  }
}

export default ComposedVerticalLineBarChart;
