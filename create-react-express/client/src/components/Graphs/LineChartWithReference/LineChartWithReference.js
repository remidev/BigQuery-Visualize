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
      <LineChart
        width={600}
        height={300}
        data={this.state.data}
        margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
        <ReferenceLine y={9800} label="Max" stroke="red" />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <Line type="monotone" dataKey="x" stroke="#82ca9d" />
        <Brush /> 
      </LineChart>
    );
  }
}

export default LineChartWithReference;
