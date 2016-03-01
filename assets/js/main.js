// fitvids to make all videos full width http://fitvidsjs.com/
(function($) {
	"use strict";

  /**/
  $(function() {
		$('.entry-content').fitVids();
	});

  /**/
  $(function() {
    $("time").timeago();
  });

  //http://rubentd.com/gifplayer/
  //https://github.com/rubentd/gifplayer
  /**/
  $(function() {
    $('.gifplayer').gifplayer({
      wait: true,
      playOn: 'auto', // click hover auto
      label: ''
    });
  });

  /**/
  $(function() {
    $(".lightgallery").lightGallery({
      selector: '.lightgallery-item',
      download: false,
      counter: false,
      thumbnail:true, //animateThumb: false,
      showThumbByDefault: false
    });
  });

  /* http://nicescroll.areaaperta.com/*/
  $(function() {
    if( !$('body').hasClass('page-ambb') ){
      $("html").niceScroll({
        cursoropacitymin: 0.6,
        cursoropacitymax: 1,
        cursorcolor:"#2EBD59",
        cursorwidth: "10px",
        cursorborder: "0",
        cursorborderradius: "0",
        background: "black",
        smoothscroll: false
      });
    }
  });

  // https://superdevresources.com/open-links-popup/
  // http://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen
  function PopupCenter(url, title, w, h) {
    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
      newWindow.focus();
    }
  }

  $(function() {
    $('.share-this').click(function() {
       //window.open('http://kanishkkunal.in','popup','width=600,height=600,scrollbars=no,resizable=no');
       var social = $(this).data('share');
       var socialTitle = document.title; // $(this).data('share');

       switch(social) {
            case 'twitter':
                new PopupCenter('https://twitter.com/intent/tweet?url=http%3A%2F%2Fadammacias.com%2F&text='+socialTitle+'%3A&via=adammacias',socialTitle,'450','600');
                break;
            case 'gplus':
                new PopupCenter('https://plus.google.com/share?url=http%3A%2F%2Fadammacias.com%2F',socialTitle,'450','600');
                break;
            default:
                new PopupCenter('https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fadammacias.com%2F',socialTitle,'450','600');
        }
       return false;
    });
  });

}(jQuery));

// jQuery(document).ready(function() { $("time").timeago(); });


  /*-----------------------------------------------------------------------
  = PARALAX SHARK
  -----------------------------------------------------------------------
  $(document).mousemove(function(e){
  var xMouse = e.pageX;
  var xCenter = $(window).width()/2;
  var offset = xMouse - xCenter;
    //$(".content-bg img").css({"left": -offset*0.03});
    $(".content-bg img").css({"bottom": -offset*0.03});
  })//end mouse move

*/
