import React, { Component } from "react";
import Photos from "./Photos";
import NotFound from "./NotFound";
//Stateful

class PhotoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  componentDidMount() {
    let query = this.props.match.params.input;
    if (query) {
      this.props.handleSearch(query);
    }
  }

  // Handles Browser Navigation
  componentDidUpdate() {
    window.onpopstate = (e) => {
      // Delay for match params to be current
      setTimeout(() => {
        let query = this.props.match.params.input;
        if (query) {
          this.props.handleSearch(query);
        }
      }, 500);
    };
  }

  render() {
    //If no results, render NotFound Component
    if (this.props.data.length === 0 && this.props.loading === false) {
      return (
        <div className="photo-container">
          <h2>Results</h2>
          <NotFound />
        </div>
      );
    } else {
      //Otherwise return Photo components
      return (
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
            {this.props.data.map((photo) => {
              return <Photos key={photo.id} photo={photo} />;
            })}
          </ul>
        </div>
      );
    }
  }
}

export default PhotoContainer;

//Debugging Simple Formatting

// render() {
//     return (
//         this.props.data.map( photo=> {
//             return <Photos key={photo.id} photo={photo}/>
//         })
//     );
// }
