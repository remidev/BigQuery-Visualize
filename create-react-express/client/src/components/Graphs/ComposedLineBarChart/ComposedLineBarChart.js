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

class ComposedLineBarChart extends React.Component {

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
          <ComposedChart width={600} height={300} data={this.state.data}
              margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid stroke='#f5f5f5'/>
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type='monotone' dataKey='z' fill='#8884d8' stroke='#8884d8'/>
            <Bar dataKey='y' barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey='x' stroke='#ff7300' />
            <Brush/>
         </ComposedChart>
      );
    }
}

export default ComposedLineBarChart;
