import React, { Component } from 'react'; 
import SvgComponent from '../../SvgComponent.js';
import Titles from '../../Titles.js';
import ParallaxIcon from '../../ParallaxIcon.js';
import './HomeSection.scss'; 
import { constants } from '../../../containers/Home/constants';

import { store } from '../../../store';

const { titles, icons } = constants;

class HomeSection extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // TODO - Start animation here
  }
  render() {
    const renderIcons = icons.map((icon, index) => (
      <ParallaxIcon key={index} parallaxdistance={icon.parallaxdistance} icon={icon.icon} />
    ));

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
        <div className="frontend">
          {/* TODO - Just make this a regular div */}
          {/*<ParallaxIcon distance="45" layer="2" class="cover" />*/}
          {/* TODO - Make a similar solution like with titles */}
          {renderIcons}
          <Titles data={titles.data} />
        </div>
      </div>
    );
  }
}

export default HomeSection;