import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip
  //   Legend
} from "recharts";

class ScatterChartLabels extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: [],
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
        <XAxis type="number" dataKey={"x"} name="stature" unit="cm" />
        <YAxis type="number" dataKey={"y"} name="weight" unit="kg" />
        <CartesianGrid />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={this.state.data} fill="#8884d8">
          <LabelList dataKey="x" />
        </Scatter>
      </ScatterChart>
    );
  }
}

export default ScatterChartLabels;
