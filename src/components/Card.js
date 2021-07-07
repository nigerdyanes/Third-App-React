import React, { Component } from "react";

import './styles/Card.css'

class Card extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="card Card">
          <div className="card-body">
            <h5 className="card-title">{this.props.item.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.item.episode}</h6>
            <p className="card-text">
              Air Date: {this.props.item.air_date}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Card;
