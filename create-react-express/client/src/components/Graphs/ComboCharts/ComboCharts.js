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
     dataKeyX: "",
     dataKeyY: "",
    }
  }
  
  componentDidMount() {
    for (var key in this.props.chart[0]) {
      if (Object.prototype.hasOwnProperty.call(this.props.chart[0], key)) {
        var val = this.props.chart[0];
        var TempDataKeyX = Object.keys(val)[0];
        var TempDataKeyY = Object.keys(val)[1];
      }
    }
    if (!TempDataKeyX) TempDataKeyX = "";
    if (!TempDataKeyY) TempDataKeyY = "";

    console.log(TempDataKeyX);
    console.log(TempDataKeyY);

    this.setState({
      data: this.props.chart,
      dataKeyX: TempDataKeyX,
      dataKeyY: TempDataKeyY
    });
    console.log(TempDataKeyX);
    console.log(TempDataKeyY);
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
          <XAxis dataKey={this.state.dataKeyX} />
          <YAxis dataKey={this.state.dataKeyY}/>
          <Tooltip />
          <Line type="monotone" dataKey={this.state.dataKeyY} stroke="#8884d8" fill="#8884d8" />
      
        </LineChart>

        <LineChart
          width={600}
          height={300}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.state.dataKeyX} />
          <YAxis dataKey={this.state.dataKeyY}/>
          <Tooltip />
          <Line type="monotone" dataKey={this.state.dataKeyY} stroke="#82ca9d" fill="#82ca9d" />
        
        </LineChart>

        <AreaChart
          width={600}
          height={300}
          data={this.state.data}
          syncId="anyId"
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={this.state.dataKeyX} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={this.state.dataKeyY} stroke="#82ca9d" fill="#82ca9d" />
          <Brush /> 
          {/* Brush Controls All  */}
        </AreaChart>
      </div>
    );
  }
}

export default ComboCharts;
