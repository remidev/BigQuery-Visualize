import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Nav from "./components/Nav/Nav";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import NoMatch from "./components/Pages/NoMatch/NoMatch";
import Popular from "./components/Pages/Popular/Popular";
import Gallery from "./components/Pages/Gallery/Gallery";
import Statistics from "./components/Pages/Statistics/Statistics";

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
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/statistics" component={Statistics} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            {/* <Route exact path="/help" component={Help} /> */}
            <Route component={NoMatch} />
          </Switch>
          {/* <Footer/> */}
        </div>
      </Router>
    );
  }
}

export default App;
