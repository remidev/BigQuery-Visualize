import React from "react";
import "semantic-ui-css/semantic.min.css";
import { PieChart, Pie, Cell } from "recharts";
//Sector


class PieChartN extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
     data: [],
     XAxis: "",
     dataKeyX: "",
     dataKeyY: ""
    }
  }
  
  componentDidMount(){
    this.setState({
      data: this.props.chart
    })
    console.log(this.props)
  }

  COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  RADIAN = Math.PI / 180;
  
  renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const dx = cx + radius * Math.cos(-midAngle * this.RADIAN);
  const dy = cy + radius * Math.sin(-midAngle * this.RADIAN);

  return (
    <text
      dx={dx}
      dy={dy}
      fill="white"
      textAnchor={dx > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  render() {
    return (
      <PieChart width={700} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          // key={}
          data={this.state.data}
          dataKey={this.state.dataKeyX}
          cx={300}
          cy={200}
          labelLine={false}
          label={this.renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
        >
          {this.state.data.map((entry, index) => (
            <Cell fill={this.COLORS[index % this.COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}

export default PieChartN;
