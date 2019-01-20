import React, { Component } from 'react';

export default class AnimatedText extends Component {
  constructor(props) {
    super(props);

    this.defaultTitle = this.props.title;
    this.state = {
      secondaryTitle: "Placeholder"
    }
  }
  /* TODO Make animations run from inside component
  initialAnimation() {

  }
  iconHoverAnimation() {

  }
  */
  render() {
    return (
      <div className="animatedText" side={this.props.side} parallaxdistance={this.props.distance}>
        <h1 className="primary">
          <span>{this.defaultTitle}</span>
          <div className="over"></div>
        </h1>
        <h1 className="secondary">
          {/*this.state.secondaryTitle*/}
        </h1>
      </div>
    );
  }
} 