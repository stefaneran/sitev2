import $ from 'jquery';
import { constants } from './constants';

const { delays, offsets } = constants.animation;
const { maxOffset, maxRotate, maxBgOffset } = offsets;

// Used in parallax calculation
const calculate = (coord, half, full, max, modif) => {
  return Math.floor((((coord - half) / half) * max) * ((coord > full) ? modif : (-1 * modif))); 
}

let isMobile = () => {
  return (window.innerWidth < 800);
}

function openCurlyBrackets() {
  $('.curtain.left').css({ right: '50%' });
  $('.curtain.right').css({ left: '50%' });
}

function uncoverTextAnimation() {
  $('.title').each(function () {
    let me = $(this);
    let title = me.find('span');
    let overlay = me.find('.over');
    let animside = me.attr('animside');

    overlay.css(animside, '0px');
    overlay.css('width', '100%');

    setTimeout(() => {
      title.css('visibility', 'visible');

      overlay.css(animside, '');
      animside = (animside === 'left' ? 'right' : 'left');
      overlay.css(animside, '0px');

      setTimeout(() => {
        overlay.css('width', '0%');
      }, 50);
    }, 500);
  });
}

export function flipTitlesUp() {
  const delays = [75, 50, 25];
  let index = 0;
  $('.titles .title').each(function() {
    setTimeout(() => {
      let primary = $(this).find('h1.primary');
      primary.css('margin-top', '-1em');
    }, delays[index]);
    index++;
  });
}

export function flipTitlesDown() {
  const delays = [50, 25, 75];
  let index = 0;
  $('.titles .title').each(function() {
    setTimeout(() => {
      let primary = $(this).find('h1.primary');
      primary.css('margin-top', '0em');
    }, delays[index]);
    index++;
  });
}

// Start the opening animations
export function initAnimation() {

  // Chain all animations one after another
  setTimeout(() => {
    // Open the curly braces
    openCurlyBrackets();

    setTimeout(() => {
      // Display the titles
      uncoverTextAnimation();

      setTimeout(() => {
        // Enable the parallax effect
        initParallax();

      }, delays.text_length)
    }, delays.curtains_length);
  }, delays.before);
}

// initialize the mouse move event listener that applies parallax effect
export function initParallax() {
  $('body').mousemove(event => {
    if(isMobile()) return;
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
    if(isMobile()) return;
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
    if(isMobile()) return;
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



  