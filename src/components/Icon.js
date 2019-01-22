import React, { Component } from 'react';
import $ from 'jquery';
import SvgComponent from './SvgComponent';
import { store } from '../store';
import { iconHover } from '../actions/home';

class Icon extends Component {
  constructor(props) {
    super(props);
  }
  flipTitlesUp = () => {
    // Change the state of titles
    store.dispatch(iconHover(this.props.icon));
    // Start animation
    let delays = [75, 50, 25];
    let index = 0;
    $('.titles .title').each(function() {
      setTimeout(() => {
        let primary = $(this).find('h1.primary');
        primary.css('margin-top', '-1em');
      }, delays[index]);
      index++;
    });
  }
  flipTitlesDown = () => {
    // Start animation
    let delays = [50, 25, 75];
    let index = 0;
    $('.titles .title').each(function() {
      setTimeout(() => {
        let primary = $(this).find('h1.primary');
        primary.css('margin-top', '0em');
      }, delays[index]);
      index++;
    });
  }
  renderSvg() {
    return(
      <div className="icon" parallaxdistance={this.props.parallaxdistance}>
        <SvgComponent name={this.props.icon} />
      </div>
    );
  }
  render() {
    return (
      <div className="iconWrapper" icon={this.props.icon} 
           onMouseEnter={this.flipTitlesUp}
           onMouseLeave={this.flipTitlesDown}>
        <div className="bg" parallaxdistance={this.props.parallaxdistance}></div>
        {this.renderSvg()}
      </div>
    );
  }
}

export default Icon;