import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import TestImage from "./Images/testImg.jpeg";
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment
} from "semantic-ui-react";

import "./App.css";

class Statistics extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={12}>
                <Header as="h1">
                We Are  
                  <span className="sub"> Statistics!</span>
                </Header>
                <p>
                Statistics is the science concerned with developing and studying methods for collecting, analyzing, interpreting and presenting empirical data. Statistics is a highly interdisciplinary field; research in statistics finds applicability in virtually all scientific fields and research questions in the various scientific fields motivate the development of new statistical methods and theory.
                </p>
              </Grid.Column>
             
              <Grid.Column width={12}>
                <Header as="h1">
                  Oh yeah, <span className="sub">it's that good.</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
            </Grid>
            <Grid.Column width={12}>
                <Header as="h1">
                 
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
          </Segment>
          <Segment>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                A Catalyst for <span className="sub">Change</span>
                </Header>
                <p>
                  "How many legs does the average person have?" <br></br>A logical system
                  will answer ~1.99 <br></br> A statistical system will answer 2
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src={TestImage} />
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
export default Statistics;
