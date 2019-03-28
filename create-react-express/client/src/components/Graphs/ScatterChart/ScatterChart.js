import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
//   Legend
} from "recharts";

class ScatterChartN extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data:[],
    };
  }

  componentDidMount(){
    this.setState({
      data: this.props.chart
    })
    // console.log(this.props)
  }

  render() {
    return (
      <ScatterChart
        width={600}
        height={300}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis dataKey={"x"} type="number" name="stature" unit="cm" />
        <YAxis dataKey={"y"} type="number" name="weight" unit="kg" />
        <Scatter name="A school" data={this.state.data} fill="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    );
  }
}

export default ScatterChartN;
