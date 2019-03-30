import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  Brush
} from "recharts";

class PercentChart extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: [],
      XAxis: "",
      dataKeyX: "",
      dataKeyY: "",
      dataKeyZ: ""
    };
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

  getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return this.toPercent(ratio, 2);
  };

  toPercent = (decimal, fixed = 0) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  };

  renderTooltipContent = o => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => result + entry.value, 0);

    return (
      <div className="customized-tooltip-content">
        <p className="total">{`${label} (Total: ${total})`}</p>
        <ul className="list">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${this.getPercent(
                entry.value,
                total
              )})`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <AreaChart
        width={700}
        height={400}
        data={this.state.data}
        stackOffset="expand"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey={this.state.XAxis} />
        <YAxis tickFormatter={this.toPercent} />
        <Tooltip content={this.renderTooltipContent} />
        <Area
          type="monotone"
          dataKey={this.state.dataKeyX}
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey={this.state.dataKeyY}
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey={this.state.dataKeyZ}
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Brush />
      </AreaChart>
    );
  }
}

export default PercentChart;
