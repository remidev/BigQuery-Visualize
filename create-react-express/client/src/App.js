import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

//Header Nav Footer
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"

import Gallery from "./components/Pages/Gallery/Gallery"
//Pages Include {Include Header,Nav,Footer Always}

// import Home from "./components/Pages/Home/Home";
import Home from "./components/Pages/Home/Home"
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
            <Route exact path="/" component={Home} /> 
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={Gallery} />
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
