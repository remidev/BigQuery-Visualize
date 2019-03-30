import React from "react";

import {
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
function GalleryFile(props) {
  // console.log(props);

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    // border: "2px solid black",

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
        <div>
        {props.fileData.map(i => {
         console.log(i);
         return (<li style={styles}>{JSON.stringify(i)}</li>)
        })}</div>
          {console.log(props.fileData)}
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
