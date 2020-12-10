// Add your scripts here

import lottie from 'lottie-web';
import ScrollMagic from 'scrollmagic';

const animation = lottie.loadAnimation({
  container: document.getElementById('treeLottie'),
  loop: true,
  autoplay: false,
  path: 'https://gist.githubusercontent.com/ashleykolodziej/645a79568f0df30df09c6d1783a834fa/raw/577e21b4000bfe5248271e9a4f7e749cecab04f4/data.json',
});

const controller = new ScrollMagic.Controller();

function pintree() {
  new ScrollMagic.Scene({
    triggerElement: '#trigger',
    triggerHook: 0,
    duration: '1100%',
  })
    .setPin('#treeLottie', { pushFollowers: false })
    .addTo(controller);
}

pintree();

function animatelottie() {
  // console.log(this.documentElement.scrollTop);
  const scrollPosition = this.documentElement.scrollTop;
  // console.log(document.body.clientHeight);
  const scrollPercentage = Math.round(100 * (scrollPosition / document.body.clientHeight));
  // console.log(scrollPercentage);
  // const maxFrames = animation.totalframes;
  // const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
  animation.goToAndStop((scrollPercentage) * 155);
}
document.addEventListener('scroll', animatelottie);
