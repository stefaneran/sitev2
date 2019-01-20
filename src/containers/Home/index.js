import React, { Component } from 'react'; 
import HomeSection from '../../components/sections/HomeSection';
import './Home.scss';

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

// TODO - Conditionaly add prop for animation based on cookies