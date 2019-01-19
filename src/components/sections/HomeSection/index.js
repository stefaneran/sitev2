import React, { Component } from 'react'; 
import './HomeSection.scss'; 
import { constants } from '../../../constants'; 
import { initAnimation, initParallax } from './functions.js';  
import { SvgComponent } from '../../misc/SvgComponent.js';
import { AnimatedText } from '../../misc/AnimatedText.js';
import { ParallaxSquare } from '../../misc/ParallaxSquare.js';
const { text } = constants;


export class HomeSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="section">
        <div className="curtains"> 
          <div className="curtain left">
            <SvgComponent class="left" name="curlyBracket" />
          </div>
          <div className="curtain right">
            <SvgComponent class="right" name="curlyBracket" /> 
          </div>
        </div>
        <div className="titles">
          <ParallaxSquare distance="75" layer="2" class="cover" />
          <ParallaxSquare distance="45" layer="3" class="small" icon="github" />
          <ParallaxSquare distance="45" layer="3" class="small" icon="linkedin" />
          <ParallaxSquare distance="45" layer="3" class="small" icon="email" />
          <ParallaxSquare distance="45" layer="3" class="small" icon="CV" />
          <AnimatedText side="left"  distance="30" text={text.name} /><br/>
          <AnimatedText side="right" distance="5" text={text.occupation1} /><br/>
          <AnimatedText side="left"  distance="30" text={text.occupation2} />
        </div> 
      </div>
    );
  }
}

init();
function init() {

  // Check if there is a [skip anim] cookie

  // Start the initial animations 
  initAnimation();
  // TODO - ComponentDidMount 
  //initParallax();
}