import React, { Component } from 'react'; 
import HomeSection from '../../components/HomeSection';
import { initAnimation } from './animations.js';

export class Home extends Component {
  render() {
    return(
      <div id="HomePage" className="container">
        <HomeSection />
      </div>
    );
  }
}
