import React, { Component } from "react";

import "./styles/Loader.css";

class Loader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loader;
