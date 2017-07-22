/*
1. logo bounceInDown  1
2. resW  zoomOutLeft 1
2. transW zoomOutRight 1
3. resW slideInDown 1
3. transW slideInUp 1
4. letters res flipOutX .75
4. letters trand flipOutY .75
5. letters logo rollIn 1s-1op
6. letters logo rollOut 1s-0op
7. letters logo slideInRight
8. letters res rotateOutDownRight
8. letters trans rotateOutUpLeft
9. resW lightSpeedIn
9. transW zoomIn
10. logo fade out
11. letters rotate in
*/

jQuery(document).ready(function($) {






var resL = $('.res.letter');
var transL = $('.trans.letter');
var resW = $('.resW');
var transW = $('.transW');
var logo = $('#logo');
var tl = new TimelineMax();


tl.to([resL,transL], 2, {className: "+=bounce", immediateRender:false}, "bounce");
tl.set([resL,transL],  0.1, {className: "-=bounce", immediateRender:false}, "fadeOut");
/*
tl.to(resL, 1, {className: "+=fadeOutRight", delay:2, immediateRender:false}, "fadeOut");
tl.to(transL, 1, {className: "+=fadeOutLeft", delay:2, immediateRender:false}, "fadeOut");
tl.to(resL, 1, {className: "res letter flipInX", delay:2, immediateRender:false}, "flip");
tl.to(transL, 1, {className: "trans letter flipOutY", delay:2, immediateRender:false}, "flip");
tl.to(resL, 1, {className: "res letter rollIn", delay:2, immediateRender:false}, "rollIn");
tl.to(transL, 1, {className: "trans letter rollIn", delay:2, immediateRender:false}, "rollIn");
tl.to(resL, 1, {className: "res letter rollOut", delay:2, immediateRender:false}, "rollOut");
tl.to(transL, 1, {className: "trans letter rollOut", delay:2, immediateRender:false}, "rollOut");
*/
/*tl.play();*/

});
*/