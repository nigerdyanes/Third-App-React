import React, { Component } from "react";

import Card from "./Card";

class Main extends Component {

  componentDidMount(){
    console.log(this.props.data);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <h1>Main Content</h1>
            <div className="container mt-5">
              <div className="row">
                {this.props.data && this.props.data.map(item => {
                  return (
                  <div className="col-3" key={item.id}>
                    <Card item={item} />
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
