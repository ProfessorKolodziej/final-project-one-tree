// Add your scripts here


import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
import { TimelineMax } from 'gsap/all';
import lottie from 'lottie-web';

const controller = new ScrollMagic.Controller();

const tl = new TimelineMax();

function stickyAnimation() {
  const stickyHeader = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 0.5,
    duration: '50%',
  })
    .setPin('#pin1', { pushFollowers: false })
    //.addIndicators()
    .addTo(controller);

  // let fixHeader = new ScrollMagic.Scene({
  //    triggerElement: "#trigger2",
  //    triggerHook: 0.2,
  // })
  // .setPin("#pin1")
  // .setClassToggle("#pin1", "shrink")
  // .addIndicators()
  // .addTo(controller);

  /* const animationScene = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    duration: '800%',
  })
    // .setClassToggle('#pin1', 'test')
    .setTween(tl)
    .addTo(controller); */

  const treeScene = new ScrollMagic.Scene({
    triggerElement: '#treeTrigger',
    triggerHook: 0,
    duration: '1100%',
  })
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
}

const animation = lottie.loadAnimation({
  container: document.getElementById('treeLottie'),
  loop: true,
  autoplay: false,
  // path: 'https://gist.githubusercontent.com/sebasbarraud/b9229cf3b64d7b46d782f3742298b440/raw/544015d2b0e9dbef7eea10087f5f632f6303482c/carpeta.json',
  path: 'https://gist.githubusercontent.com/ashleykolodziej/645a79568f0df30df09c6d1783a834fa/raw/577e21b4000bfe5248271e9a4f7e749cecab04f4/data.json',
  // path: 'data.json',
});

stickyAnimation();

function onAnimationDOMLoaded(e) {
  tl.to({ frame: 0 }, 3, {
    frame: animation.totalFrames - 1,
    onUpdate() {
      animation.goToAndStop(Math.round(this.target.frame), true);
    },
    ease: Linear.easeNone,
  });
}

animation.addEventListener('DOMLoaded', onAnimationDOMLoaded);
