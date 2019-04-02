import React from "react";
import { Container, Header } from "semantic-ui-react";
import GraphGIF from "./images/GraphGIF.jpg";
const styleBox = {
  border: "4px solid whitesmoke",
  textAlign: "center"
};

const styleIMG = {
  width: "600px",
  height: "300px",
  textAlign: "center",
  border: "5px solid black",
  borderRadius: "5%"
};
const Popular = () => (
  <Container style={styleBox} text>
    <Header as="h2">Popular</Header>
    <h3>
      {" "}
      Below, we compiled a list of interesting Searches you might like to try!
    </h3>
    <hr />
    <Header as="h4">
      Source: Reddit | ContentType: Reddit Comments | Content: Score | Content:
      Ups | Year: 2007
    </Header>
    <Header as="h4">
      Source: Reddit | ContentType: Reddit Comments | Content: Score | Content:
      Ups | Year: 2005
    </Header>{" "}
    <Header as="h4">
      Source: Stack Overflow | ContentType: Post | Content: Score | Content:
      Comments | Year: 2012
    </Header>{" "}
    <Header as="h4">
      Source: Reddit | ContentType: Reddit Comments | Content: Score | Content:
      Ups | Year: 2006
    </Header>{" "}
    <Header as="h4">
      Source: Stack Overflow | ContentType: Post | Content: Score | Content:
      Comments | Year: 2009
    </Header>{" "}
    <Header as="h4">
      Source: Stack Overflow | ContentType: Post | Content: Score | Content:
      Comments | Year: 2011
    </Header>{" "}
    <Header as="h4">
      Source: Stack Overflow | ContentType: Post | Content: Tags | Content:
      Body | Year: 2012
    </Header>{" "}
    <Header as="h4">
      Source: Stack Overflow | ContentType: Post | Content: Score | Content:
      Comments | Year: 2014
    </Header>{" "}
   
    <h1>Happy Graphing!</h1>
    <img src={GraphGIF} style={styleIMG} />
  </Container>
);

export default Popular;
