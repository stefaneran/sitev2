import $ from 'jquery';
import { constants } from '../../../constants';

const { maxOffset, maxRotate } = constants.animation;

const animationTime = {
  before: 200,
  curtains_length: (500 + 50),
  text_length: (500 + 50)
}

export function initAnimation() {
  setTimeout(() => {
    // Open the curly braces
    openCurlyBrackets();

    setTimeout(() => {
      // Display the titles
      animateText();
      initParallax();

      setTimeout(() => {
        // Start the flickering
        // ....() 
      }, animationTime.text_length)
    }, animationTime.curtains_length);
  }, animationTime.before);

  function openCurlyBrackets() {
    $('.curtain.left').css({ right: '50%' });
    $('.curtain.right').css({ left: '50%' });
  }
  function animateText() {
    $('.animatedText').each(function () {
      let me = $(this);
      let title = me.find('span');
      let overlay = me.find('.over');
      let side = me.attr('side');

      overlay.css(side, '0px');
      overlay.css('width', '100%');

      setTimeout(() => {
        title.css('visibility', 'visible');

        overlay.css(side, '');
        side = (side == 'left' ? 'right' : 'left');
        overlay.css(side, '0px');

        setTimeout(() => {
          overlay.css('width', '0%');
        }, 50);
      }, 500);
    });
  }
  function flicker() {

  }
}

export function initParallax() {
  $('body').mousemove(event => {
    let { pageX, pageY } = event;
    let width = window.innerWidth;
    let halfWidth = width / 2;
    let height = window.innerHeight;
    let halfHeight = height / 2;

    let top = Math.floor((((pageY - halfHeight) / halfHeight) * maxOffset) * ((pageY > height) ? -1 : 1));
    let left = Math.floor((((pageX - halfWidth) / halfWidth) * maxOffset) * ((pageX > width) ? -1 : 1));
    let axisX = Math.floor((((pageY - halfHeight) / halfHeight) * maxRotate) * ((pageY > height) ? -1 : 1));
    let axisY = Math.floor((((pageX - halfWidth) / halfWidth) * maxRotate) * ((pageX > width) ? 1 : -1));

    $('[parallaxDistance]').each(function () {
      let me = $(this);
      let offset = 1 - (me.attr('parallaxDistance') / 100);
      let transform = `rotateX(${Math.round(axisX * offset)}deg) rotateY(${Math.round(axisY * offset)}deg)`

      me.css({
        top: `${Math.round(top * offset)}px`,
        left: `${Math.round(left * offset)}px`,
        transform: transform
      });
    });
  });
}

