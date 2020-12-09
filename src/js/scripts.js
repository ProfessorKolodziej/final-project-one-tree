// Add your scripts here

import lottie from 'lottie-web';

const animation = lottie.loadAnimation({
  container: document.getElementById('treeLottie'),
  loop: true,
  autoplay: false,
  // path: 'https://gist.githubusercontent.com/sebasbarraud/b9229cf3b64d7b46d782f3742298b440/raw/544015d2b0e9dbef7eea10087f5f632f6303482c/carpeta.json',
  path: 'https://gist.githubusercontent.com/ashleykolodziej/645a79568f0df30df09c6d1783a834fa/raw/577e21b4000bfe5248271e9a4f7e749cecab04f4/data.json',
  // path: 'data.json',
});

const duration = document.body.clientHeight * 4;
//console.log(document.body.clientHeight);
function animatelottie() {
  //console.log(this.documentElement.scrollTop);
  const scrollPosition = this.documentElement.scrollTop;
  //console.log(document.body.clientHeight);
  const scrollPercentage = Math.round(100 * (scrollPosition / document.body.clientHeight));
  //console.log(scrollPercentage);
  //const maxFrames = animation.totalframes;
  //const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
  animation.goToAndStop((scrollPercentage) * 155);
}
document.addEventListener('scroll', animatelottie);