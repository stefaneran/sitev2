import $ from 'jquery';
import initParallax from './parallax';
import { constants } from '../../constants';

const { maxOffset, maxRotate, maxBgOffset } = constants.animation.offsets;
const { delays } = constants.animation; 

// TODO - Change to Promises
// Start the opening animations
export function initAnimation() {
  setTimeout(() => {
    // Open the curly braces
    openCurlyBrackets();

    setTimeout(() => {
      // TODO - start parallax after everything done
      // Display the titles
      uncoverTextAnimation();
      initParallax();

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

  