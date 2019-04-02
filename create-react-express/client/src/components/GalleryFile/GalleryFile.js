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
    border: "3px solid #f0f0f1",
    borderRadius:"3%",
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
     <Segment style={{ padding: "0em", overflow:"auto"}} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em", overflow:"hidden" }}>
           <section> {props.chart} </section>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
          
          <h1>Statistics - <small>Your Sample Info</small></h1>

        {props.fileData.map(i => {
         ArrContent1.push(parseInt([Object.values(i)[1]]));
         ArrContent2.push(parseInt([Object.values(i)[2]]));
         Sample1Title = [Object.keys(i)[1]];
         Sample2Title = [Object.keys(i)[2]];
        })}

      <div>
        <div style={styles}>
        <small>{`Name: ${Sample1Title}`}</small><br></br>
        <small>{`Sorted Sample: [${ArrContent1.sort()}]`}</small><br></br>
        <small>{`DataLength: ${ArrContent1.length}`}</small><br></br>
        <small>{`Minimum: ${ss.min(ArrContent1)} | Maximum: ${ss.max(ArrContent1)}`}</small><br></br>
        <small>{`Sum: ${ss.sum(ArrContent1)} | Product: ${ss.product(ArrContent1)}`}</small><br></br>
        <small>{`Mean: ${ss.mean(ArrContent1)} | Mode: ${ss.modeFast(ArrContent1)} | Median: ${ss.median(ArrContent1)}`}</small><br></br>
        <small>{`InterquartileRange: ${ss.interquartileRange(ArrContent1)}`}</small><br></br>
        <small>{`Sample Variance: ${ss.sampleVariance(ArrContent1)} | Sample Standard Deviation: ${ss.sampleStandardDeviation(ArrContent1)}`}</small><br></br>
        <small>{`Skewness: ${ss.sampleSkewness(ArrContent1)}`}</small><br></br>
        <small>{`Median Absolute Deviation: ${ss.medianAbsoluteDeviation(ArrContent1)}`}</small><br></br>
        <hr></hr>

        <small>{`Name: ${Sample2Title}`}</small><br></br>
        <small>{`Sorted Sample: [${ArrContent2.sort()}]`}</small><br></br>
        <small>{`DataLength:${ArrContent2.length}`}</small><br></br>
        <small>{`Minimum: ${ss.min(ArrContent2)} | Maximum: ${ss.max(ArrContent2)}`}</small><br></br>
        <small>{`Sum: ${ss.sum(ArrContent2)} | Product: ${ss.product(ArrContent2)}`}</small><br></br>
        <small>{`Mean: ${ss.mean(ArrContent2)} | Mode: ${ss.modeFast(ArrContent2)} | Median: ${ss.median(ArrContent2)}`}</small><br></br>
        <small>{`InterquartileRange: ${ss.interquartileRange(ArrContent2)}`}</small><br></br>
        <small>{`Sample Variance: ${ss.sampleVariance(ArrContent2)} | Sample Standard Deviation: ${ss.sampleStandardDeviation(ArrContent2)}`}</small><br></br>
        <small>{`Skewness: ${ss.sampleSkewness(ArrContent2)}`}</small><br></br>
        <small>{`Median Absolute Deviation: ${ss.medianAbsoluteDeviation(ArrContent2)}`}</small><br></br>
        <hr></hr>

        <h6>Compare the Datasets!</h6>
        <small>{`Sample Correlation ${ss.sampleCorrelation(ArrContent1, ArrContent2)}`}</small><br></br>
        <small>{`Sample Covariance ${ss.sampleCovariance(ArrContent1, ArrContent2)}`}</small><br></br>
        </div>
        <br></br>
        <div style={styles}>
          <Header>The Data!</Header> 
        {props.fileData.map(i => {
        //  console.log(i);
         return (<li>{JSON.stringify(i)}</li>)
        })}</div>
        <div> 
        <br></br>
      </div>
      </div>
        
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </div>
  );
}

export default GalleryFile;
