import $ from 'jquery';
import { constants } from '../../constants';

// Move animation constants to Home/constants
const { maxOffset, maxRotate, maxBgOffset } = constants.animation.offsets;

const calculate = (coord, half, full, max, modif) => {
  return Math.floor((((coord - half) / half) * max) * ((coord > full) ? modif : (-1 * modif))); 
}

// initialize the mouse move event listener that applies parallax effect
export default function initParallax() {
  $('body').mousemove(event => {
    // Get coordinates and width/height of window
    let { pageX, pageY } = event;
    let { innerWidth, innerHeight } = window;
    let halfWidth = innerWidth / 2; 
    let halfHeight = innerHeight / 2;

    // Calculate offsets based on mouse coordinates
    let top = calculate(pageY, halfHeight, innerHeight, maxOffset, -1);
    let left = calculate(pageX, halfWidth, innerWidth, maxOffset, -1);
    let axisX = calculate(pageY, halfHeight, innerHeight, maxRotate, -1);
    let axisY = calculate(pageX, halfWidth, innerWidth, maxRotate, 1);
    let bgPos = calculate(pageX, halfWidth, innerWidth, maxBgOffset, -1);

    // TODO: Let it use 2 more decimals
    // Move position of background image
    $('.homeSection').css('background-position-x', `${50 + bgPos}%`);

    // Apply parallax effects on all relevant components
    $('[parallaxdistance]').each(function () {
      // Calculate offset based on virtual "distance"
      let me = $(this);
      let offset = 1 - (me.attr('parallaxdistance') / 100);
      let transform = `rotateX(${Math.round(axisX * offset)}deg) rotateY(${Math.round(axisY * offset)}deg)`;

      // Apply the CSS changes
      me.css({
        top: `${Math.round(top * offset)}px`,
        left: `${Math.round(left * offset)}px`,
        transform: transform
      });
    }); 
  });
  // Mouse enter and leave methods to smooth out animation 
  $('body').mouseenter(event => {
    $('[parallaxdistance]').each(function () {
      $(this).css({
        transition:'top 200ms, left 200ms',
        top: '0px',
        left: '0px'
      });
      setTimeout(() => {
        $(this).css('transition','');
      },220);
    });
  });
  $('body').mouseleave(event => {
    $('[parallaxdistance]').each(function () {
      $(this).css({
        transition:'top 200ms, left 200ms',
        top: '0px',
        left: '0px'
      });
      setTimeout(() => {
        $(this).css('transition','');
      },220);
    });
  }); 
}