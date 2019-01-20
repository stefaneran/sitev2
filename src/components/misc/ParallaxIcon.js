import React, { Component } from 'react';
import SvgComponent from './SvgComponent';

export default class ParallaxIcon extends Component {
  constructor(props) {
    super(props);
  }
  renderIcon() {
    if(!this.props.icon) 
      return null;
    
    return(
      <div className="icon" parallaxdistance={this.props.distance}>
        <SvgComponent name={this.props.icon} />
      </div>
    )
  }
  render() {
    return (
      <div 
        className={`parallaxIcon ${this.props.class || ''}`}
        style={{ zIndex: this.props.layer }}
        icon={this.props.icon}>
        <div className="bg" parallaxdistance={this.props.distance}></div>
        {this.renderIcon()}
      </div>
    );
  }
}