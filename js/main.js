//SMOOTH SCROLL

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(function() {
    $("a[href=#menuExpand]").click(function(e) {
        $("#main-menu").toggleClass("show");
        e.preventDefault();
    });
});

$(function() {
    $(".google-map-overlay").click(function(e) {
        $(".google-map-overlay").css( "display", "none" );
        e.preventDefault();
    });
});

//Sort random function
function random(owlSelector) {
    owlSelector.children().sort(function(){
      return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
}