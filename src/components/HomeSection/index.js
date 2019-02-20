import React, { Component } from 'react';
import Modal from 'react-modal';
import Curtains from '../Curtains';
import Titles from '../Titles';
import Icons from '../Icons';

import './HomeSection.scss';

import { constants as container_constants } from '../../containers/Home/constants';
import { constants as general_constants } from '../../constants';
import { 
  initAnimation, 
  flipTitlesUp, 
  flipTitlesDown 
} from '../../containers/Home/animations';

const { titles, icons, imageNum } = container_constants;
const { general } = general_constants.text;

class HomeSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textUp: false,
      secondaryTitles: ["","",""],
      modalIsOpen: false,
      loadedImages: 0,
      startedAnimation: false
    }
  }
  componentDidUpdate() {

    // TODO - Do same but for background image

    // If main animation didn't start yet, means we are waiting for all images to load
    if(!this.state.startedAnimation) {
      // If all images finished loading
      if(this.state.loadedImages === imageNum) {
        this.setState({startedAnimation: true});
        initAnimation();
      }
      return;
    }

    // Checks whether to show or hide secondary titles
    this.state.textUp ? flipTitlesUp() : flipTitlesDown();

  }
  openModal = () => {
    this.setState({modalIsOpen: true});
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  imageLoaded = () => {
    this.setState({loadedImages: this.state.loadedImages + 1});
  }
  // When hovering over an icon, change state for secondary text
  changeText = (e) => {
    const icon = e.currentTarget.getAttribute('icon');
    if(this.state.textUp) {
      this.setState({ textUp: false });
    }
    else {
      this.setState({ 
        textUp: true,
        secondaryTitles: titles.secondary[icon] 
      });
    }
  }
  render() {
    return(
      <div className="section homeSection">
        <Curtains loaded={this.imageLoaded} />
        <div className="frontend">
          <div className="titles-background">
            <div className="color-fill" parallaxdistance="40"></div>
          </div>
          <Icons 
            data={icons} 
            handleHover={this.changeText} 
            handleClick={this.openModal}
            loaded={this.imageLoaded} />
          <Titles 
            data={titles.data} 
            secondaryTitles={this.state.secondaryTitles} />
        </div>
        <Modal className="email-modal" isOpen={this.state.modalIsOpen}>
          <div className="box">
            <div className="parallax-parent">
              <h1>Copy My Email:</h1>
              <h1>{general.email}</h1>
            </div>
          </div>
          <button onClick={this.closeModal}></button>
        </Modal>
      </div>
    );
  }
}

export default HomeSection;