import React, { Component } from 'react'; 
import HomeSection from '../../components/sections/HomeSection';
import { initAnimation } from './functions.js';

export class Home extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div id="HomePage" className="container">
        <HomeSection />
        <div className="section"></div>
      </div>
    );
  }
}

// LT-TODO - Conditionaly add prop for animation based on cookies

init();
function init() {

  // Check if there is a [skip anim] cookie

  // Start the initial animations 
  initAnimation();
  // LT-TODO - ComponentDidMount
  //initParallax();
}