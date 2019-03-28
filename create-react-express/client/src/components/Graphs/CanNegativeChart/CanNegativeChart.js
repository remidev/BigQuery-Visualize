import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush
} from "recharts";

class CanNegativeChart extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
     data: [],
    }
  }
  
    gradientOffset = () => {
    const dataMax = Math.max(...this.state.data.map(i => i.x));
    const dataMin = Math.min(...this.state.data.map(i => i.x));
  
    if (dataMax <= 0) {
      return 0;
    } else if (dataMin >= 0) {
      return 1;
    } else {
      return dataMax / (dataMax - dataMin);
    }
  };

  componentDidMount(){
    this.setState({
      data: this.props.chart
    })
    // console.log(this.props)
  }

  render() {
    return (
      <AreaChart
        width={600}
        height={300}
        data={this.state.data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={this.gradientOffset()} stopColor="green" stopOpacity={1} />
            <stop offset={this.gradientOffset()} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="x"
          stroke="#000"
          fill="url(#splitColor)"
        />
        <Brush />
      </AreaChart>
    );
  }
}

export default CanNegativeChart;
