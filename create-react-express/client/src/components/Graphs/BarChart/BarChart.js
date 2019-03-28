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

class BarChartN extends React.Component {
  
  constructor(props) {
    super(props);
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
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="y" fill="#8884d8" />
        <Bar dataKey="x" fill="#82ca9d" />
        <Brush />
      </BarChart>
    );
  }
}

export default BarChartN;
