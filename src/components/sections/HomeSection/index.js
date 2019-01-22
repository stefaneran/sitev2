import React, { Component } from 'react'; 
import SvgComponent from '../../SvgComponent.js';
import Titles from '../../Titles.js';
import Icon from '../../Icon.js';
import './HomeSection.scss'; 
import { constants } from '../../../containers/Home/constants';

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
      <Icon key={index} parallaxdistance={icon.parallaxdistance} icon={icon.icon} />
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
          {renderIcons}
          <Titles data={titles.data} />
        </div>
      </div>
    );
  }
}

export default HomeSection;