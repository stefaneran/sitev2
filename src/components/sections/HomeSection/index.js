import React, { Component } from 'react'; 
import SvgComponent from '../../misc/SvgComponent.js';
import AnimatedText from '../../misc/AnimatedText.js';
import ParallaxIcon from '../../misc/ParallaxIcon.js';
import './HomeSection.scss'; 
import { constants } from '../../../constants'; 
import { initAnimation, initParallax, initIconHover } from './functions.js';  

const { titles } = constants.text.sections.HomeSection;

export default class HomeSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="section homeSection">
        <div className="curtains">
          <div className="curtain left">
            <SvgComponent class="left" name="curlyBracket" />
          </div>
          <div className="curtain right">
            <SvgComponent class="right" name="curlyBracket" /> 
          </div>
        </div>
        <div className="titles">
          <ParallaxIcon distance="45" layer="2" class="cover" />
          <ParallaxIcon distance="45" layer="3" class="small" icon="github" />
          <ParallaxIcon distance="45" layer="3" class="small" icon="linkedin" />
          <ParallaxIcon distance="45" layer="3" class="small" icon="gmail" />
          <ParallaxIcon distance="45" layer="3" class="small" icon="CV" />
          <AnimatedText distance="35" side="left"  title={titles.default.title1} /><br/>
          <AnimatedText distance="5"  side="right" title={titles.default.title2} /><br/>
          <AnimatedText distance="35" side="left"  title={titles.default.title3} />
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