import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

//Header Nav Footer
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"

//Probably A Better Way To Import All The Graphs {List Will Be Long}
import d3ScatterPlot from "./components/Graphs/d3ScatterPlot/d3ScatterPlot"
import SimpleLineChart from "./components/Graphs/LineChart/LineChart"
import BiaxialLineChart from "./components/Graphs/BiaxialLineChart/BiaxialLineChart";
import LineChartWithReference from "./components/Graphs/LineChartWithReference/LineChartWithReference";
import ComboCharts from "./components/Graphs/ComboCharts/ComboCharts";
import ZoomChart from "./components/Graphs/ZoomChart/ZoomChart";
import OverlayAreaChart from "./components/Graphs/OverlayAreaChart/OverlayAreaChart";
import PercentChart from "./components/Graphs/PercentChart/PercentChart";
import CanNegativeChart from "./components/Graphs/CanNegativeChart/CanNegativeChart";

import BarChartN from "./components/Graphs/BarChart/BarChart";
import BarChartStacked from "./components/Graphs/BarChartStacked/BarChartStacked";
import BarChartMixed from "./components/Graphs/BarChartMixed/BarChartMixed";
import CanNegativeBarChart from "./components/Graphs/CanNegativeBarChart/CanNegativeBarChart";
import BiaxialBarChart from "./components/Graphs/BiaxialBarChart/BiaxialBarChart";
import ComposedDataChart from "./components/Graphs/ComposedDataChart/ComposedDataChart";
import ComposedLineBarChart from "./components/Graphs/ComposedLineBarChart/ComposedLineBarChart";
import ComposedVerticalLineBarChart from "./components/Graphs/ComposedVerticalLineBarChart/ComposedVerticalLineBarChart";
import PieChartN from "./components/Graphs/PieChart/PieChart";
import PieRadialChart from "./components/Graphs/PieRadialChart/PieRadialChart";

//BarCharts ~ Histograms
//PieCharts
//NetWork Graph - Trees



//Pages Include {Include Header,Nav,Footer Always}
import About from "./components/Pages/About/About";
import NoMatch from "./components/Pages/NoMatch/NoMatch";
import Search from "./components/Pages/Search/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" components={d3ScatterPlot} />
            <Route exact path="/home" component={ZoomChart} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            {/* <Route exact path="/help" component={Help} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
