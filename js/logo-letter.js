jQuery(document).ready(function($) {

var transL = $(".trans.letter");
var resL = $(".res.letter");
var letter = $(".letter");

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName)
                .one(animationEnd, function() {
                  $(this).removeClass('animated ' + animationName);
                });
            return this;
        }
    });

    /*$('.trans.letter').animateCss('bounce')
        .delay(5000)
        .queue(function() {
            $(this).animateCss('fadeOutDown')
                .dequeue();
        }).delay(5000)
        .queue(function() {
            $(this).animateCss('flipInY')
                .dequeue();
        }).delay(5000)
        .queue(function() {
            $(this).animateCss('rotateOutDownLeft')
                .dequeue();
        });*/

        /*$('.letter').animateCss('bounce').animateCss('fadeOutDown').animateCss('flipInY').animateCss('rotateOutDownLeft').animateCss('rollIn');*/

        letter.animateCss("bounce").delay(4000).queue(function(){
        $(this).animateCss("fadeOutDown").dequeue();}).delay(4000).queue(function(){
        $(this).animateCss("flipInY").dequeue();}).delay(4000).queue(function(){
            $(this).animateCss("rotateOutDownLeft").dequeue();}).delay(4000).queue(function(){
            $(this).animateCss("rollIn").dequeue();});
});

/*<script>
  function testAnim(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
  };

  $(document).ready(function(){
    $('.js--triggerAnimation').click(function(e){
      e.preventDefault();
      var anim = $('.js--animations').val();
      testAnim(anim);
    });

    $('.js--animations').change(function(){
      var anim = $(this).val();
      testAnim(anim);
    });
  });

</script>
*/