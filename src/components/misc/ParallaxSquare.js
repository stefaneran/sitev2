import React, { Component } from 'react';

export class ParallaxSquare extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div 
        className={`parallaxSquare ${this.props.class || ''} ${this.props.icon || ''}`}
        style={{ zIndex: this.props.layer }}>
        <div parallaxDistance={this.props.distance}></div>
      </div>
    );
  }
}