import React from "react";
// import { Container, Header } from "semantic-ui-react";
import GalleryFile from "../../GalleryFile/GalleryFile";
import GalleryData from "../Gallery/GalleryData";
import _ from "lodash";
import axios from "axios";

const stylesForTools = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
};
// Note name is the X axis grid x,y,z... are the values must be named this way
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: [],
      data: [
        { name: "Page A", x: 4000, y: 2400, z: 2400 },
        { name: "Page B", x: 3000, y: 1398, z: 2210 }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/all").then(res => {
      console.log(res);
      console.log("hwllo");
    });
  }

  updateGalleryData(chartName, data) {
    GalleryData[chartName].data = data;
  }

  handleChange(e) {
    // console.log(e.target);
    this.updateGalleryData(e.target.name, this.state.data);
    console.log(e.target.name);
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
            <div className="column">
              <p>
                <select id="Source" class="ui dropdown">
                  <option value="">Source</option>
                  <option value="0">Reddit</option>
                  <option value="1">Stacks Overflow</option>
                </select>
              </p>

              <p>
                <select id="Field1" class="ui dropdown">
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
                <select id="Field2" class="ui dropdown">
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
            </div>
            <div className="column">
              <div>
                <h4 className="ui center aligned grid">Tools</h4>
                <hr />
                {unique.map((checkers, i) => {
                  return (
                    <label style={stylesForTools}>
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
