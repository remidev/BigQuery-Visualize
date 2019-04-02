import React from "react";
import * as ss from 'simple-statistics'
import {
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";


function GalleryFile(props) {
  
  const styles = {
    listStyleType: "none",
    border: "1px solid black",
    borderCollapse: "collapse",
  };

 var Sample1Title ="";
 var Sample2Title ="";
 var ArrContent1= [];
 var ArrContent2 = [];

  // zScoreCalculator=(num)=>{
  //   ss.zScore(num, , );
  // }
  //Will Finish Z Score Input Calculator

  return (
    <div>
     <Segment style={{ padding: "0em", overflow:"hidden" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em", overflow:"hidden" }}>
           <section> {props.chart} </section>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          
          <h1>Your Query Information!</h1>
        <div>
          <Header>JSON FILE RECIEVED:</Header> 
        {props.fileData.map(i => {
        //  console.log(i);
         return (<li style={styles}>{JSON.stringify(i)}</li>)
        })}</div>
        <div> 
        <br></br>

        <h1>Statistics</h1>
        <br></br>

        {props.fileData.map(i => {
         ArrContent1.push(parseInt([Object.values(i)[1]]));
         ArrContent2.push(parseInt([Object.values(i)[2]]));
         Sample1Title = [Object.keys(i)[1]];
         Sample2Title = [Object.keys(i)[2]];
        })}</div>
        <div>
        <h5>Sample Info</h5>
        
        <small>{`Name: ${Sample1Title}`}</small><br></br>
        <small>{`Sorted Sample: [${ArrContent1.sort()}]`}</small><br></br>
        <small>{`DataLength: ${ArrContent1.length}`}</small><br></br>
        <small>{`Minimum: ${ss.min(ArrContent1)}`}</small><br></br>
        <small>{`Maximum: ${ss.max(ArrContent1)}`}</small><br></br>
        <small>{`Sum: ${ss.sum(ArrContent1)}`}</small><br></br>
        <small>{`Product: ${ss.product(ArrContent1)}`}</small><br></br>
        <small>{`Mean: ${ss.mean(ArrContent1)}`}</small><br></br>
        {/* <small>{`Harmonic Mean: ${ss.harmonicMean(Math.abs(ArrContent1)).toFixed(2)}`}</small><br></br> */}
        <small>{`Mode: ${ss.modeFast(ArrContent1)}`}</small><br></br>
        <small>{`Median: ${ss.median(ArrContent1)}`}</small><br></br>
        <small>{`Skewness: ${ss.sampleSkewness(ArrContent1)}`}</small><br></br>
        <small>{`Sample Variance: ${ss.sampleVariance(ArrContent1)}`}</small><br></br>
        <small>{`Sample Standard Deviation: ${ss.sampleStandardDeviation(ArrContent1)}`}</small><br></br>
        <small>{`Median Absolute Deviation: ${ss.medianAbsoluteDeviation(ArrContent1)}`}</small><br></br>
        <small>{`InterquartileRange: ${ss.interquartileRange(ArrContent1)}`}</small><br></br>
        <hr></hr>

        <small>{`Name: ${Sample2Title}`}</small><br></br>
        <small>{`Sorted Sample: [${ArrContent2.sort()}]`}</small><br></br>
        <small>{`DataLength:${ArrContent2.length}`}</small><br></br>
        <small>{`Minimum: ${ss.min(ArrContent2)}`}</small><br></br>
        <small>{`Maximum: ${ss.max(ArrContent2)}`}</small><br></br>
        <small>{`Sum: ${ss.sum(ArrContent2)}`}</small><br></br>
        <small>{`Product: ${ss.product(ArrContent2)}`}</small><br></br>
        <small>{`Mean: ${ss.mean(ArrContent2)}`}</small><br></br>
        {/* <small>{`Harmonic Mean: ${ss.harmonicMean(Math.abs(ArrContent2)).toFixed(2)}`}</small><br></br> */}
        <small>{`Mode: ${ss.modeFast(ArrContent2)}`}</small><br></br>
        <small>{`Median: ${ss.median(ArrContent2)}`}</small><br></br>
        <small>{`Skewness: ${ss.sampleSkewness(ArrContent2)}`}</small><br></br>
        <small>{`Sample Variance: ${ss.sampleVariance(ArrContent2)}`}</small><br></br>
        <small>{`Sample Standard Deviation: ${ss.sampleStandardDeviation(ArrContent2)}`}</small><br></br>
        <small>{`Median Absolute Deviation: ${ss.medianAbsoluteDeviation(ArrContent2)}`}</small><br></br>
        <small>{`InterquartileRange: ${ss.interquartileRange(ArrContent2)}`}</small><br></br>
        <hr></hr>

        <h6>Compare the Datasets!</h6>
        <small>{`Sample Correlation ${ss.sampleCorrelation(ArrContent1, ArrContent2)}`}</small><br></br>
        <small>{`Sample Covariance ${ss.sampleCovariance(ArrContent1, ArrContent2)}`}</small><br></br>
        </div>
        
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </div>
  );
}

export default GalleryFile;
