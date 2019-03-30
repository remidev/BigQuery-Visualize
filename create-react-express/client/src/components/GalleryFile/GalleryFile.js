import React from "react";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
function GalleryFile(props) {
  // console.log(props);

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "whitesmoke",
    border: "2px solid black",
    margin: "30px",

  };

  return (
    <div>
     <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
           <Header> {props.chart} </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          <Header> Statistics! </Header>
          <Header> {props.chart[0]}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
      {/* <div style={styles}>
        
      </div> */}
    </div>
  );
}

export default GalleryFile;
