import React from "react";
// import { Container, Header } from "semantic-ui-react";
import GalleryFile from "../../GalleryFile/GalleryFile";
import GalleryData from "../Gallery/GalleryData";
import _ from "lodash";
import axios from "axios";

const styles = {
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
        { name: "Page B", x: 3000, y: 1398, z: 2210 },
        { name: "Page C", x: -1000, y: 9800, z: 2290 },
        { name: "Page D", x: 500, y: 3908, z: 2000 },
        { name: "Page E", x: -2000, y: 4800, z: 2181 },
        { name: "Page F", x: -250, y: 3800, z: 2500 },
        { name: "Page G", x: 3490, y: 4300, z: 2100 }
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

  //Create a Submit Button
  // axios.post("/api/give").then({
  //
  // })

  updateGalleryData(chartName, data) {
    GalleryData[chartName].data = data;
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
  // componentDidMount(){

  // }
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
              <p />
              <p />
              <p />
              <p />
            </div>
            <div className="column">
              <div>
                <h4 className="ui center aligned grid">Tools</h4>
                <hr />
                {unique.map((checkers, i) => {
                  return (
                    <label style={styles}>
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
