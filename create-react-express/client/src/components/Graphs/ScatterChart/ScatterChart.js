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

const data = [
  // { x: 100, y: 200, z: 200 },
  // { x: 120, y: 100, z: 260 },
  // { x: 170, y: 300, z: 400 },
  // { x: 140, y: 250, z: 280 },
  // { x: 150, y: 400, z: 500 },
  // { x: 110, y: 280, z: 200 }
];

class ScatterChartN extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: data
    };
    console.log(data);
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
        <Scatter name="A school" data={data} fill="#8884d8" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </ScatterChart>
    );
  }
}

export default ScatterChartN;
