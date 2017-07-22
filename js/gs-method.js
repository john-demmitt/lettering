jQuery(document).ready(function($) {

var resL = $('.res.letter');
var transL = $('.trans.letter');
var word = $('.word');
var resW = $('#resW');
var transW = $('#transW');
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