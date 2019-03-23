import React from "react";
import { Container, Header } from "semantic-ui-react";
import GalleryFile from "../../GalleryFile/GalleryFile";
import GalleryData from "../Gallery/GalleryData";
import _ from "lodash";

const styles={
 marginLeft:"auto",
 marginRight: "auto",
 width:"50%",
}
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // galleryState: GalleryData,
      filter: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
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
    console.log(this.state);
    var GraphComponent = _.map(GalleryData, (value, key) => {
      if (this.state.filter.indexOf(value.type) !== -1) {
        return (
          <GalleryFile
            chart={value.chart}
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

<div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="column">
    <div >
        <h4 class="ui center aligned grid">Tools</h4>
        <hr></hr>
        {unique.map((checkers, i) => {
          return <label style={styles}><input type="checkbox" key={i} name={checkers} onClick={this.handleChange}/>{checkers}</label>
        })}
        </div>
    </div>
  </div>
  <div class="ui vertical divider">
    and
  </div>
</div>
       
        <div>{GraphComponent}</div>
      </div>
    );
  }
}

export default Gallery;
