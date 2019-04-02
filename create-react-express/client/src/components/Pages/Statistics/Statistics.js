import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";
import DataSaur from "./Images/DataSaur.jpg"
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

const Styling ={
  textAlign:"center",
  width:"100%",
}
class Statistics extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Segment vertical>
            <Grid stackable>
             
                <h1 style={Styling} >
                We Are  
                  <span style={Styling} className="sub"> Statistics!</span>
                </h1>
                
                <p style={Styling}>
                Statistics is the science concerned with developing and studying methods for collecting, analyzing, interpreting and presenting empirical data. Statistics is a highly interdisciplinary field; research in statistics finds applicability in virtually all scientific fields and research questions in the various scientific fields motivate the development of new statistical methods and theory.
                </p>
             
                <Header style={Styling} as="h1">
                  Oh yeah, <span className="sub">it's that good.</span>
                </Header>
                <p style={Styling}>
                  We generated a compilation of information for your sample data searched for each query!
                </p>

            </Grid>
            <Grid.Column width={12}>
                <Header as="h1">
                 
                </Header>
               
                  <h3><strong>What we found for you!</strong></h3>
                  <hr></hr>
                  <p><strong>Maximum: </strong> Maximum is the largest or the boiggest value in a given set of data</p>
                  <p><strong>Minimum: </strong> Minimum is the smallest or the least value in a given set of data</p>
                  <p><strong>Sum: </strong> The result of adding the valuess in a given set of data</p>
                  <p><strong>Product: </strong> The result of multiplying the valuess in a given set of data</p>
                  <p><strong>Mean: </strong> The mean is the average of all numbers and is sometimes called the arithmetic mean</p>
                  <p><strong>Median: </strong> The statistical median is the middle number in a sequence of numbers</p>
                  <p><strong>Mode: </strong> The mode is the number that occurs most often within a set of numbers.</p>
                  <p><strong>InterquartileRange: </strong> In descriptive statistics, the interquartile range (IQR), also called the midspread or middle 50%, being equal to the difference between 75th and 25th percentiles</p>
                  <p><strong>Sample Variance: </strong> Variance is the expectation of the squared deviation of a random variable from its mean</p>
                  <p><strong>Sample Standard Deviation: </strong> Standard Deviation is a measure that is used to quantify the amount of variation or dispersion of a set of data values</p>
                  <p><strong>Skewness: </strong> Skewness is asymmetry in a statistical distribution, in which the curve appears distorted or skewed either to the left or to the right</p>
                  <p><strong>Median Absolute Deviation: </strong> The median absolute deviation is a robust measure of the variability of a univariate sample of quantitative data</p>
                  
              </Grid.Column>
          </Segment>
          <Segment>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                Statistics is a Catalyst for <span className="sub">Change</span>
                </Header>
                <h5>Statistical knowledge helps you use the proper methods to collect the data, employ the correct analyses, and effectively present the results.</h5>
                <small>
                  "How many legs does the average person have?" <br></br>A logical system
                  will answer ~1.99 <br></br> A statistical system will answer 2
                </small>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src={DataSaur} />
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
export default Statistics;
