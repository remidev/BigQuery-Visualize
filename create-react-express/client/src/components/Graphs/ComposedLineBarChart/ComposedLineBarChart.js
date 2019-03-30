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
//Chart Accepts 3 Contents
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
     data: [],
     XAxis: "",
     dataKeyX: "",
     dataKeyY: "",
     dataKeyZ:"",
    }
  }

  componentDidMount() {
    for (var key in this.props.chart[0]) {
      if (Object.prototype.hasOwnProperty.call(this.props.chart[0], key)) {
        var val = this.props.chart[0];
        var AxisName = Object.keys(val)[0];
        var TempDataKeyX = Object.keys(val)[1];
        var TempDataKeyY = Object.keys(val)[2];
        var TempDataKeyZ = Object.keys(val)[3];
      }
    }
    if (!TempDataKeyX) TempDataKeyX = "";
    if (!TempDataKeyY) TempDataKeyY = "";
    if (!TempDataKeyZ) TempDataKeyZ = "";

    this.setState({
      data: this.props.chart,
      XAxis:AxisName,
      dataKeyX: TempDataKeyX,
      dataKeyY: TempDataKeyY,
      dataKeyZ: TempDataKeyZ
    });
  }

    render () {
        return (
          <ComposedChart width={700} height={400} data={this.state.data}
              margin={{top: 20, right: 20, bottom: 20, left: 20}}>
            <CartesianGrid stroke='#f5f5f5'/>
            <XAxis dataKey={this.state.XAxis}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type='monotone' dataKey={this.state.dataKeyZ} fill='#8884d8' stroke='#8884d8'/>
            <Bar dataKey={this.state.dataKeyY} barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey={this.state.dataKeyX} stroke='#ff7300' />
            <Brush/>
         </ComposedChart>
      );
    }
}

export default ComposedLineBarChart;
