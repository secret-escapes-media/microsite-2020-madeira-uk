// general js for the project that wouldn't be a reuseable component

$('.js-image-attribution').each(function() {
  var $this = $(this);
  var contents = $this.html();
  $this.css('cursor', 'pointer');
  $this.html("<img style=\"width: 15px; height: 15px;\" src=\"_assets/img/icons/info.svg\" alt=\"picture information\">");
  $this.on('click',function(){
    $this.html(contents);
    $this.css('cursor', 'auto');
  });
});






/*********** Blur and change text colour of hero image  *************/


$(window).on('scroll', function () {

  if($(window).scrollTop() > 200) {
         $(".bv-title-yellow").addClass("text--yellow");
     } else {
         //remove the background property so it comes transparent again (defined in your css)
        $(".bv-title-yellow").removeClass("text--yellow");
     }

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    var pixs = $(document).scrollTop(),
        pixs = pixs / 60,
        offset = 600,
    //range = 100,
        calc = 1 - (pixs )/10;
        //calc = 0 + (pixs )/10;
        //calc2 = 0 + pixs ;

    var opac = 0 + (pixs )/10;
    var scrollPos1 = $(document).scrollTop()-800 ;
    var scrollPos2 = $(document).scrollTop()-1200 ;
    var scrollPos3 = $(document).scrollTop()-1800 ;
    var numClasses = $('.js-nav-section').length - 1;
    console.log(calc);


	if(isFirefox === false){
    $(".bv-banner-out").css({ "-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });
  } else {
    $(".bv-banner-out").css({"opacity": calc });
  }

  });
