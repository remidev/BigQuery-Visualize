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

const data = [
  // { name: "Page A", x: 4000, y: 2400, z: 2400 },
  // { name: "Page B", x: 3000, y: 1398, z: 2210 },
  // { name: "Page C", x: 2000, y: 9800, z: 2290 },
  // { name: "Page D", x: 2780, y: 3908, z: 2000 },
  // { name: "Page E", x: 1890, y: 4800, z: 2181 },
  // { name: "Page F", x: 2390, y: 3800, z: 2500 },
  // { name: "Page G", x: 3490, y: 4300, z: 2100 }
];

class BiaxialLineChart extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
     data: data,
    }
    console.log(data);
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
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="y"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line yAxisId="right" type="monotone" dataKey="x" stroke="#82ca9d" />
        <Brush /> 
      </LineChart>
    );
  }
}

export default BiaxialLineChart;
