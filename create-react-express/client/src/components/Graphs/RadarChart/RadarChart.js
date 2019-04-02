import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

class RadarChartN extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.chart
    });
    // console.log(this.props)
  }

  render() {
    // console.log(this.props);
    return (
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={this.state.data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="x"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="y"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    );
  }
}

export default RadarChartN;
