// Add your scripts here

import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TimelineMax } from 'gsap';
import bodymovin from 'bodymovin';

const controller = new ScrollMagic.Controller();

const tl = new TimelineMax();

function stickyAnimation() {
  const stickyHeader = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    triggerHook: 0.5,
    duration: '50%',
  })
    .setPin('#pin1', { pushFollowers: false })
    .addIndicators()
    .addTo(controller);

  // let fixHeader = new ScrollMagic.Scene({
  //    triggerElement: "#trigger2",
  //    triggerHook: 0.2,
  // })
  // .setPin("#pin1")
  // .setClassToggle("#pin1", "shrink")
  // .addIndicators()
  // .addTo(controller);

  const animationScene = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    duration: '800%',
  })
    // .setClassToggle('#pin1', 'test')
    .setTween(tl)
    .addTo(controller);
}

const animation = bodymovin.loadAnimation({
  container: document.getElementById('treeLottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'data.json',
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
