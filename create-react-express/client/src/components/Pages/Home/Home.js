import React, { Component } from "react";
import _ from "lodash";
// import topojson from "topojson";
import * as d3 from "d3";
import chroma from "chroma-js";
import TestingJsonFile from "../../../TestingJsonFile";

var divStyle = {
  // marginLeft: "auto",
  // marginRight: "auto",
  // width:"40%"
};
var styles = {
  backgroundColor: "lightgrey"
};

var width = 1200;
var height = 900;
var margin = { left: 20, top: 20, right: 20, bottom: 20 };
var radius = 15;

//d3 functions
var xScale = d3
  .scaleBand()
  .domain([0, 1, 2, 3, 4, 5, 6])
  .range([margin.left, width - margin.right]); // 0-6 sets the range to 0-1 discrete

var colorScale = chroma.scale(["red", "yellow", "green"]);
var amountScale = d3.scaleLog();

var simulation = d3
  .forceSimulation()
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("charge", d3.forceManyBody())
  .force("collide", d3.forceCollide(radius))
  .force('x', d3.forceX(d=> d.focusX))
  .force('y', d3.forceY(d => d.focusY))
  .stop();

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Datafile: []
    };

    this.forceTick = this.forceTick.bind(this);
    simulation.on("tick", this.forceTick);
  }

  componentWillMount() {
    var Datafile = _.chain(TestingJsonFile)
      .filter(d => d)
      .map(d => {
        return {
          name: d.name,
          years: d.year,
          date: new Date (d.date)
        };
      })
      .value();

    console.log(Datafile);

    var row = -1;
    Datafile = _.chain(Datafile)
      .groupBy(d => d3.timeWeek.floor(d.date))
      .sortBy((Datafile, week) => new Date(week))
      .map(Datafile => {
        row += 1;
        return _.map(Datafile, data => {
          return Object.assign(data, {
            focusX: xScale(data.date.getDay()),
            focusY: row * 10,
          });
        });
      }).flatten().value();

    var amountExtent = d3.extent(Datafile, d => d.years);
    // console.log(amountExtent);
    amountScale.domain(amountExtent);

    // console.log(amountScale(100));
    this.setState({ Datafile });
  }

  componentDidMount() {
    this.container = d3.select(this.refs.container);
    console.log(this.refs.container, this.container);
    this.renderCircles();

    simulation
      .nodes(this.state.Datafile)
      .alpha(0.9)
      .restart();
  }

  componentDidUpdate() {
    this.renderCircles();
  }

  renderCircles() {
    this.circles = this.container
      .selectAll("circle")
      .data(this.state.Datafile, d => d.name);

    this.circles.exit().remove();

    this.circles = this.circles
      .enter()
      .append("circle")
      .merge(this.circles)
      .attr("r", radius)
      .attr("fill-opacity", 0.4)
      .attr("fill", d => colorScale(amountScale(d.years)))
      .attr("stroke", d => colorScale(amountScale(d.years)));
  }

  forceTick() {
    console.log(this.circles.datum().x, this.circles.datum().y);
    this.circles.attr("cx", d => d.x);
    this.circles.attr("cy", d => d.y).attr("r", radius);
  }

  render() {
    return (
      <div style={divStyle}>
        <svg style={styles} width={width} height={height} ref="container" />
      </div>
    );
  }
}

export default Home;
