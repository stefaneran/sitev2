import React, { Component } from 'react';
import SvgComponent from './SvgComponent';

class ParallaxIcon extends Component {
  constructor(props) {
    super(props);
  }
  renderIcon() {
    if(!this.props.icon) 
      return null;
    
    return(
      <div className="icon" parallaxdistance={this.props.parallaxdistance}>
        <SvgComponent name={this.props.icon} />
      </div>
    )
  }
  render() {
    return (
      <div className="parallaxIcon" icon={this.props.icon}>
        <div className="bg" parallaxdistance={this.props.parallaxdistance}></div>
        {this.renderIcon()}
      </div>
    );
  }
}

export default ParallaxIcon;