import $ from 'jquery';
import { constants } from '../../constants';
// TODO - Refactor so I don't have to import these inside this file
import { store } from '../../store';
import { iconHover } from '../../actions/home';

const { maxOffset, maxRotate, maxBgOffset } = constants.animation.offsets;
const { delays } = constants.animation; 

// Used for parallax
const calculate = (coord, half, full, max, modif) => {
  return Math.floor((((coord - half) / half) * max) * ((coord > full) ? modif : (-1 * modif))); 
}

// TODO - Change to Promises
// Start the opening animations
export function initAnimation() {
  setTimeout(() => {
    // Open the curly braces
    openCurlyBrackets();

    setTimeout(() => {
      // TODO - start parallax and hover after everything done
      // Display the titles
      uncoverTextAnimation();
      initParallax();
      initIconHover();

      setTimeout(() => {
        // Icons showing up
        // ....() 

      }, delays.text_length)
    }, delays.curtains_length);
  }, delays.before);

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
        animside = (animside == 'left' ? 'right' : 'left');
        overlay.css(animside, '0px');

        setTimeout(() => {
          overlay.css('width', '0%');
        }, 50);
      }, 500);
    });
  }
}

export function showSecondaryText() {
  // Change states of AnimatedText components


}

// initialize the mouse move event listener that applies parallax effect
function initParallax() {
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

// Initialize the hover event listeners for icons
function initIconHover() {
  $('.homeSection .icon').hover(
  // Display secondary text
  function() {



    // TODO - This should be done somewhere else
    store.dispatch(iconHover('github'));



    let delays = [75, 50, 25];
    let count = 0;
    $('.titles .title').each(function() {
      setTimeout(() => {
        let primary = $(this).find('h1.primary');
        primary.css('margin-top', '-1em');
      }, delays[count]);
      count++;
    });
  },
  // Switch back to default text 
  function() {
    let delays = [75, 50, 25];
    let count = 0;
    $('.titles .title').each(function() {
      setTimeout(() => {
        let primary = $(this).find('h1.primary');
        primary.css('margin-top', '0em');
      }, delays[count]);
      count++;
    });
  });
}
