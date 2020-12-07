// Add your scripts here

import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';

var controller = new ScrollMagic.Controller();

function stickyAnimation() {

    let stickyHeader = new ScrollMagic.Scene({
        triggerElement: "#trigger1", 
        triggerHook: 0.5,
        duration: "50%"
    })
    .setPin("#pin1", {pushFollowers: false})
    //.addIndicators()
    .addTo(controller);

    //let fixHeader = new ScrollMagic.Scene({
    //    triggerElement: "#trigger2",
    //    triggerHook: 0.2,
    //})
    //.setPin("#pin1")
    //.setClassToggle("#pin1", "shrink")
    //.addIndicators()
    //.addTo(controller);

   
}

stickyAnimation();

