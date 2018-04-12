import React, { Component } from 'react';
import './style.css';

class CardRepresentation extends Component {
  render() {
      var flip_front = this.props.showFront ? "flip__front shown" : "flip__front"
      var flip_back = this.props.showFront ? "flip__back": "flip__back shown"
    return (<div className="card">
    <div className="flip">
      <div className={flip_front}>
        <div className="card__front">
          <div className="card__logo top-right"></div>
          <div className="card__chip"></div>
          <div className="card__number">{this.props.number}</div>
          <div className="card__holder-name">{this.props.name}</div>
          <div className="card__exp">{this.props.expiration}</div>
        </div>
      </div>
      <div className={flip_back}>
        <div className="card__back">
          <div className="card__strip"></div>
          <div className="card__ccv">{this.props.cvv}</div>
          <div className="card__logo bottom-right"></div>
        </div>
      </div>
    </div>
  </div>)
  
  }
}

export default CardRepresentation;
