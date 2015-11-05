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

// OWL CAROUSEL - SERVICES
$(document).ready(function() {

// SERVICES TABLE CAROUSEL
  $(".services").owlCarousel({
    items: 4,
    autoPlay : false,
    stopOnHover : true,
    lazyLoad : true,
    navigation : true,
    navigationText : [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ],
    itemsDesktop : [1440,3],
    itemsDesktop : [1228,3],
    itemsDesktopSmall : [1024,2],
    itemsTablet: [768,2],
    beforeInit : function(elem){
      random(elem);
    }
  });

  // BRANDS CAROUSEL
    $("#brands-slider").owlCarousel({
      autoPlay : false,
      stopOnHover : false,
      lazyLoad : true,
      navigation : true,
      pagination : false,
      navigationText : [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
      ],
    beforeInit : function(elem){
      random(elem);
    }
    });

    $(".team").owlCarousel({
      items : 5,
      autoPlay : false,
      stopOnHover : false,
      lazyLoad : true,
      navigation : true,
      pagination : false,
      navigationText : [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
        ],
    beforeInit : function(elem){
      random(elem);
    }
    });

    // About Gallery Images
    $(function(){
      $('.chocolat-parent').Chocolat({
        loop           : true,
        imageSize     : 'contain',
        overlayOpacity : 0.6
      });
    });

                // Sticky header scroll
                function scrollnfix() {
                    window.addEventListener('scroll', function(e){
                        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                        shrinkOn = 20, //header height + body padding - nav height
                        navi = document.querySelector("#main-menu");
                        if (distanceY > shrinkOn) {
                            navi.setAttribute('class', 'sub-menu-bg');
                            $("#main-menu").css('border-top','transparent');
                            $("#main-menu").css('border-bottom','transparent');
                            $("#main-menu").css('box-shadow','0px 2px 2px rgba(0, 0, 0, 0.33)');
                        } else {
                            if (navi.className == 'sub-menu-bg'){
                                navi.setAttribute('class', 'notsticky');
                                $("#main-menu").css('border-top','2px solid #707070');
                                $("#main-menu").css('border-bottom','2px solid #707070');
                                $("#main-menu").css('box-shadow','none');
                            }
                        }
                    });
                }

                function addLoadEvent(func) {
                    var oldonload = window.onload;
                    if (typeof window.onload != 'function') {
                        window.onload = func;
                    } else {
                        window.onload = function() {
                            if (oldonload) {
                                oldonload();
                            }
                            func();
                        }
                    }
                }
                addLoadEvent(scrollnfix());
  });
            
// Body Noise Background

$('#body-noise').noisy({
  'intensity' : 0.05, 
  'size' : '200', 
  'opacity' : 0.08, 
  'fallback' : '', 
  'monochrome' : true
}).css('background-color', '#ffffff');