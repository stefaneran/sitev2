import React, { Component } from 'react'; 
import $ from 'jquery';
import { constants } from '../../../constants'; 
import './HomeSection.scss';

const { text } = constants;

export class HomeSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="section">
        <div className="titles">
          <div className="ball" pos="1">
            <div paralax="60"></div>
          </div>
          <div className="ball" pos="2">
            <div paralax="60"></div>
          </div>
          <div className="ball" pos="3">
            <div paralax="60"></div>
          </div>
          <div className="ball" pos="4">
            <div paralax="60"></div>
          </div>
          <h1 title="name" paralax="10">{text.name}</h1>
          <h1 title="occ1" paralax="20">{text.occupation1}</h1>
          <h1 title="occ2" paralax="10">{text.occupation2}</h1>
        </div> 
      </div>
    );
  }
}

// TODO - ComponentDidMount 
paralax();
function paralax() {
  $('body').mousemove(event => { 
    const maxOffset = 35;
    const maxRotate = 6;
    let { pageX, pageY } = event; 
    let width = window.innerWidth;
    let halfWidth = width / 2;
    let height = window.innerHeight; 
    let halfHeight = height / 2;

    let top  = Math.floor((((pageY-halfHeight)/halfHeight)*maxOffset)*((pageY > height)?1:-1));
    let left = Math.floor((((pageX-halfWidth)/halfWidth)*maxOffset)*((pageX > width)?1:-1));
    let axisX = Math.floor((((pageY-halfHeight)/halfHeight)*maxRotate)*((pageY > height)?-1:1));;
    let axisY = Math.floor((((pageX-halfWidth)/halfWidth)*maxRotate)*((pageX > width)?1:-1));

    $('[paralax]').each(function() { 
      let me = $(this);
      let offset = 1 - (me.attr('paralax') / 100);

      me.css({
        top: `${Math.round(top*offset)}px`,
        left: `${Math.round(left*offset)}px`,
        transform: `rotateX(${Math.round(axisX*offset)}deg) rotateY(${Math.round(axisY*offset)}deg)`
      }); 
    });
  });
}