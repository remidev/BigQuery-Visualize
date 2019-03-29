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
    this.state={
     data: [],
    }
  }

  componentDidMount(){
    this.setState({
      data: this.props.chart
    })
    // console.log(this.props)
  }

  render() {
    return (
      <BarChart
        width={600}
        height={300}
        data={this.state.data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="z" stackId="a" fill="#8884d8" />
        <Bar dataKey="y" stackId="a" fill="#82ca9d" />
        <Bar dataKey="x" fill="#ffc658" />
        <Brush />
      </BarChart>
    );
  }
}

export default BarChartMixed;
