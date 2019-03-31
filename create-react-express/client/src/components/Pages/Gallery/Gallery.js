import React from "react";
// import { Container, Header } from "semantic-ui-react";
import GalleryFile from "../../GalleryFile/GalleryFile";
import GalleryData from "../Gallery/GalleryData";
import _ from "lodash";
import axios from "axios";
import moment from "moment";

const ToolStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
};

const TextFieldStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%"
};

const TextFieldContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly"
};

// Note name is the X axis grid x,y,z... are the values must be named this way
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateGalleryData(chartName, data) {
    GalleryData[chartName].data = data;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Button Has Clicked");

    var Source = document.getElementById("Source");
    var SelectedSource = Source.options[Source.selectedIndex].value;
    //This Above is the SOURCE VALUE;

    var ContentType = document.getElementById("ContentType");
    var SelectedContentType =
      ContentType.options[ContentType.selectedIndex].value;
    //This Above is the Content1 VALUE;

    var StaticTIME = document.getElementById("StaticTIME");
    var SelectedTIME = StaticTIME.options[StaticTIME.selectedIndex].value;
    //XAXIS ex. Page1 Page2 Page3

    var Content1 = document.getElementById("Field1");
    var SelectedContent1 = Content1.options[Content1.selectedIndex].value;
    //This Above is the Content1 VALUE;

    var Content2 = document.getElementById("Field2");
    var SelectedContent2 = Content2.options[Content2.selectedIndex].value;
    //This Above is the Content2 VALUE;

    var Year = document.getElementById("Year");
    var SelectedYear = Year.options[Year.selectedIndex].value;
    //This Above is the Year VALUE;

    console.log(
      SelectedSource,
      SelectedContentType,
      StaticTIME,
      SelectedContent1,
      SelectedContent2,
      SelectedYear
    );

    if (
      SelectedContent1 === "" ||
      SelectedContent2 === "" ||
      SelectedSource === "" ||
      ContentType === "" ||
      Year === ""
    ) {
      return null;
      //Please Select Input Fields;
    }

    //Giving This To Backend
    var queryInfo = {
      Source: SelectedSource,
      ContentType: SelectedContentType,
      XAxis: SelectedTIME,
      Content1: SelectedContent1,
      Content2: SelectedContent2,
      Year: SelectedYear
    };

    console.log(queryInfo);

    // Hit backend query route (/routes/index.js) and send query params inside queryInfo object
    axios.post("/api/give", { queryInfo }).then(res => {
      console.log(res.data[0]);

      var info = res.data[0];
      var testArr = [...info];
      console.log(testArr);
      for (let i = 0; i < testArr.length; i++) {
        testArr[i].created_utc = moment
          .unix(testArr[i].created_utc)
          .format("MM/DD/YYYY");
      }
      console.log(testArr);
      this.setState({
        data: testArr
      });
    });
  }

  handleChange(e) {
    // console.log(e.target);
    this.updateGalleryData(e.target.name, this.state.data);

    //Array Checker for Filter
    if (e.target.checked && this.state.filter.indexOf(e.target.name) === -1) {
      var currentState = this.state.filter;
      currentState.push(e.target.name);

      this.setState({
        filter: currentState
      });
    } else if (
      !e.target.checked &&
      this.state.filter.indexOf(e.target.name) !== -1
    ) {
      console.log(this.state.filter.indexOf(e.target.name));

      const currentState = this.state.filter.filter(
        filter => filter !== e.target.name
      );
      console.log(currentState);
      this.setState({
        filter: currentState
      });
    }
  }

  render() {
    // Filter Method
    var GraphComponent = _.map(GalleryData, (value, key) => {
      if (this.state.filter.indexOf(value.type) !== -1) {
        return (
          <GalleryFile
            chart={value.chart()}
            fileData={this.state.data}
            key={value.id}
            handleChange={this.handleChange}
          />
        );
      }
    });

    let unique = [...new Set(_.map(GalleryData, item => item.type))];
    console.log(unique);

    return (
      <div>
        <div className="ui segment">
          <div className="ui two column very relaxed grid">
            <div className="column" style={TextFieldContainerStyle}>
              <p>
                <select id="Source" class="ui dropdown" style={TextFieldStyles}>
                  <option value="">Source</option>
                  <option value="fh-bigquery.reddit_">Reddit</option>
                  <option value="StacksOverflow">Stacks Overflow</option>
                </select>
              </p>

              <p>
                <select
                  id="ContentType"
                  class="ui dropdown"
                  style={TextFieldStyles}
                >
                  <option value="">Content</option>
                  <option value="comments">comments</option>
                  <option value="posts">post</option>
                </select>
              </p>

              <p>
                <select
                  id="StaticTIME"
                  class="ui dropdown"
                  style={TextFieldStyles}
                >
                  <option value="created_utc">Time Created</option>
                </select>
              </p>

              <p>
                <select id="Field1" class="ui dropdown" style={TextFieldStyles}>
                  <option value="">Content</option>
                  <option value="subreddit">Subreddit</option>
                  <option value="author">Author</option>
                  <option value="ups">Ups</option>
                  <option value="downs">Downs</option>
                  <option value="score">Score</option>
                  <option value="body">Body</option>
                  <option value="created_utc">Time Created</option>
                </select>
              </p>

              <p>
                <select id="Field2" class="ui dropdown" style={TextFieldStyles}>
                  <option value="">Content</option>
                  <option value="subreddit">Subreddit</option>
                  <option value="author">Author</option>
                  <option value="ups">Ups</option>
                  <option value="downs">Downs</option>
                  <option value="score">Score</option>
                  <option value="body">Body</option>
                  <option value="created_utc">Time Created</option>
                </select>
              </p>

              <p>
                <select id="Year" class="ui dropdown" style={TextFieldStyles}>
                  <option value="">Year</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                </select>
              </p>

              <section>
                <button
                  onClick={this.handleSubmit}
                  class="ui button"
                  // style={TextFieldStyles}
                  type="submit"
                >
                  Submit
                </button>
              </section>
            </div>

            <div className="column">
              <div>
                <h4 className="ui center aligned grid">Tools</h4>
                <hr />
                {unique.map((checkers, i) => {
                  return (
                    <label style={ToolStyles}>
                      <input
                        type="checkbox"
                        key={i}
                        name={checkers}
                        onClick={this.handleChange}
                      />
                      {checkers}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ui vertical divider">and</div>
        </div>

        <div>{GraphComponent}</div>
      </div>
    );
  }
}

export default Gallery;
