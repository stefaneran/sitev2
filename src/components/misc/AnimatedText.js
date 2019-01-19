import React, { Component } from 'react';

export class AnimatedText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="animatedText" side={this.props.side} parallaxDistance={this.props.distance}>
        <h1>
          <span>{this.props.text}</span>
          <div className="over"></div>
        </h1>
      </div>
    );
  }
} 