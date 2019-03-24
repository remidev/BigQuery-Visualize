import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  // Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  // Brush
} from "recharts";

const data = [
  
  // { name: 12, cost: 4.41, impression: 300 },
  // { name: 13, cost: 2.1, impression: 50 },
  // { name: 14, cost: 8, impression: 190 },
  // { name: 15, cost: 0, impression: 300 },
  // { name: 16, cost: 9, impression: 400 },
  // { name: 17, cost: 3, impression: 200 },
  // { name: 18, cost: 2, impression: 50 },
  // { name: 19, cost: 3, impression: 100 },
  // { name: 20, cost: 7, impression: 100 }
];

const getAxisYDomain = (from, to, ref, offset) => {
  const refData = data.slice(from - 1, to);
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach(d => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom || 0) - offset, (top || 0) + offset]; //
};

const initialState = {
  data,
  left: "dataMin",
  right: "dataMax",
  refAreaLeft: "",
  refAreaRight: "",
  top: "dataMax+1",
  bottom: "dataMin-1",
  top2: "dataMax+20",
  bottom2: "dataMin-20",
  animation: true
};

class ZoomChart extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
     data: data,
     state: initialState
    }
    console.log(data);
  }
  //heck yeah
  zoom() {
    let { refAreaLeft, refAreaRight, data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
      this.setState(() => ({
        refAreaLeft: "",
        refAreaRight: ""
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "cost", 1);
    const [bottom2, top2] = getAxisYDomain(
      refAreaLeft,
      refAreaRight,
      "impression",
      50
    );

    this.setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
      bottom2,
      top2
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
      bottom: "dataMin",
      top2: "dataMax+50",
      // bottom: "dataMin+50"
    }));
  }

  render() {
    const {
      data,
      // barIndex,
      left,
      right,
      refAreaLeft,
      refAreaRight,
      top,
      bottom,
      top2,
      bottom2
    } = this.state;

    return (
      <div className="highlight-bar-charts text-center">
        <a
          href="javascript:void(0)"//Need this line
          className="btn update"
          onClick={this.zoomOut.bind(this)}
        >
          Reset Chart
        </a>

        <LineChart
          width={600}
          height={300}
          data={data}
          onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
          onMouseMove={e =>
            this.state.refAreaLeft &&
            this.setState({ refAreaRight: e.activeLabel })
          }
          onMouseUp={this.zoom.bind(this)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDataOverflow={true}
            dataKey="name"
            domain={[left, right]}
            type="number"
          />
          <YAxis
            allowDataOverflow={true}
            domain={[bottom, top]}
            type="number"
            yAxisId="1"
          />
          <YAxis
            orientation="right"
            allowDataOverflow={true}
            domain={[bottom2, top2]}
            type="number"
            yAxisId="2"
          />
          <Tooltip />
          <Line
            yAxisId="1"
            type="natural"
            dataKey="cost"
            stroke="#8884d8"
            animationDuration={300}
          />
          <Line
            yAxisId="2"
            type="natural"
            dataKey="impression"
            stroke="#82ca9d"
            animationDuration={300}
          />

          {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              yAxisId="1"
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
          {/* <Brush/> */}
        </LineChart>
      </div>
    );
  }
}

export default ZoomChart;
