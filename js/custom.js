/* Back to Top Button
------------------------------------------------------ */
$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });

      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
      })
    });

/* Hide on Hover
------------------------------------------------------ */
$(document).ready(function(){
    $(".image-history-1").hover(function(){
        $(".history-heading-1").toggle();
    });

    $(".image-history-2").hover(function(){
        $(".history-heading-2").toggle();
    });

    $(".image-history-3").hover(function(){
        $(".history-heading-3").toggle();
    });

    $(".image-history-4").hover(function(){
        $(".history-heading-4").toggle();
    });

    $(".image-attractions-1").hover(function(){
        $(".attractions-heading-1").toggle();
    });

    $(".image-attractions-2").hover(function(){
        $(".attractions-heading-2").toggle();
    });

    $(".image-attractions-3").hover(function(){
        $(".attractions-heading-3").toggle();
    });

    $(".image-attractions-4").hover(function(){
        $(".attractions-heading-4").toggle();
    });

    $(".image-attractions-5").hover(function(){
        $(".attractions-heading-5").toggle();
    });

    $(".image-attractions-6").hover(function(){
        $(".attractions-heading-6").toggle();
    });

    $(".image-attractions-7").hover(function(){
        $(".attractions-heading-7").toggle();
    });

    $(".image-attractions-8").hover(function(){
        $(".attractions-heading-8").toggle();
    });

    $(".image-events-1").hover(function(){
        $(".events-heading-1").toggle();
    });

    $(".image-events-2").hover(function(){
        $(".events-heading-2").toggle();
    });

    $(".image-events-3").hover(function(){
        $(".events-heading-3").toggle();
    });

    $(".image-events-4").hover(function(){
        $(".events-heading-4").toggle();
    });

    $(".image-events-5").hover(function(){
        $(".events-heading-5").toggle();
    });

    $(".image-events-6").hover(function(){
        $(".events-heading-6").toggle();
    });

    $(".image-events-7").hover(function(){
        $(".events-heading-7").toggle();
    });

    $(".image-events-8").hover(function(){
        $(".events-heading-8").toggle();
    });
});

/* Close Collapse on Click
------------------------------------------------------ */
$(document).on('click',function(){
  $('.collapse').collapse('hide');
})

/* Callback After Expand
------------------------------------------------------ */
// $('a').on('shown.bs.collapse', function() {
//   snippet.log("shown");
// }).on('show.bs.collapse', function() {
//   snippet.log("show");
// });
