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

class OverlayAreaChart extends React.Component {

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

    render () {
        return (
          <AreaChart width={600} height={300} data={this.state.data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='x' stackId="1" stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='y' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
          <Area type='monotone' dataKey='z' stackId="1" stroke='#ffc658' fill='#ffc658' />
          <Brush/>
        </AreaChart>
        
      );
    }
}

export default OverlayAreaChart;
