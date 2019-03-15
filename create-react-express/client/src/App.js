import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';

import Header from "./components/Header/Header";
import DropdownSource from "./components/DropdownSource/DropdownSource";

class App extends Component {
  render() {
    return (
  <div>
    <Header/>
<DropdownSource/>
      


  </div>
    );
  }
}

export default App;
