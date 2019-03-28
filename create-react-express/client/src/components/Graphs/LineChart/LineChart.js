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
  Brush,
} from "recharts";

class SimpleLineChart extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
     data: [],
     width: 600,
     height: 300,
    }
  }
  componentDidMount(){
    this.setState({
      data: this.props.chart
    })
    // console.log(this.props)
  }

  render() {
    console.log(this.props);
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
          dataKey="x"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="y" stroke="#82ca9d" />
        <Brush /> 
      </LineChart>
    );
  }
}

export default SimpleLineChart;
