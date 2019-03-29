import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

class ComboCharts extends React.Component {

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
      <div>
        <LineChart
          width={600}
          height={300}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="x" stroke="#8884d8" fill="#8884d8" />
      
        </LineChart>

        <LineChart
          width={600}
          height={300}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#82ca9d" fill="#82ca9d" />
        
        </LineChart>

        <AreaChart
          width={600}
          height={300}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fill="#82ca9d" />
          <Brush /> 
          {/* Brush Controls All  */}
        </AreaChart>
      </div>
    );
  }
}

export default ComboCharts;
