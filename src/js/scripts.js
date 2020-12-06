// Add your scripts here

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

var controller = new ScrollMagic.Controller();

function stickyAnimation() {

    var stickyHeader = new ScrollMagic.Scene({
        triggerElement: "#trigger1", 
        triggerHook: "onLeave",
        duration: 300
    })
    .setPin("#pin1")
    .addIndicators()
    .addTo(controller);
}

