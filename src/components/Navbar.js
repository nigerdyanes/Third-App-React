import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Rick & Morty</span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
