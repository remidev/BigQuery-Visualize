import React, { Component } from "react";
import _ from "lodash";
// import topojson from "topojson";
import * as d3 from "d3";
import chroma from 'chroma-js';
import TestingJsonFile from "../../../TestingJsonFile"

var divStyle={
  // marginLeft: "auto",
  // marginRight: "auto",
  // width:"40%"
}
var styles={
backgroundColor:'lightgrey',
}

var width = 900;
var height = 700;
var radius = 15;


//d3 functions

var colorScale = chroma.scale(['red','yellow','green']);
var amountScale = d3.scaleLog();

var simulation = d3.forceSimulation()
  .force('center', d3.forceCenter(width /2, height/2))
  .force('charge', d3.forceManyBody())
  .force('collide', d3.forceCollide(radius));

class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      Datafile: [],
    }

    this.forceTick = this.forceTick.bind(this);
    simulation.on('tick', this.forceTick);
  }

  componentWillMount(){

    var Datafile = _.chain(TestingJsonFile)
    .filter(d => d).map(d=>{
      return {
        name: d.nm,
        city: d.cty,
        house: d.hse,
        years: d.yrs
      }
    }).value();

    var amountExtent = d3.extent(Datafile, d=> d.years);
    // console.log(amountExtent);
    amountScale.domain(amountExtent);

    console.log(amountScale(100));
   this.setState({Datafile})
  }

  componentDidMount(){
    this.container = d3.select(this.refs.container);
    console.log(this.refs.container, this.container);
    this.renderCircles();

    simulation.nodes(this.state.Datafile).alpha(0.4).restart();
  } 

  componentDidUpdate(){
    this.renderCircles();
  }

  renderCircles(){
    this.circles = this.container.selectAll('circle')
    .data(this.state.Datafile, d=> d.name);

    this.circles.exit().remove();

    this.circles = this.circles.enter().append('circle')
    .merge(this.circles)
    .attr('r',radius)
    .attr('fill-opacity', 0.4) 
    .attr('fill', d => colorScale(amountScale(d.years))) 
    .attr('stroke', d => colorScale(amountScale(d.years)));
  }

  forceTick(){
    console.log(this.circles.datum().x, this.circles.datum().y);
    this.circles.attr('cx', d=> d.x)
    this.circles.attr('cy', d=>d.y)
    .attr('r', radius);
  }

  render(){
   return (
     <div style={divStyle}>
     <svg style={styles} width={width} height={height} ref="container">

     </svg>
     </div>
   );
  }
}

export default Home;