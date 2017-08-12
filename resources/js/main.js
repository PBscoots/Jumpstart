// carousel functionality

$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:false,
    draggable:false,
    pauseOnHover:false,
    pauseOnFocus:false
  });
//peeping navbar

  var $scrolled = 0;
  $(window).scroll(function(){
    var $scrollT = $(this).scrollTop();
    if ($scrollT - $scrolled > 50){
      var $navHeight = $(".navbar").css('height');
      $(".navbar").animate({
          top: '-' + $navHeight
      },150);
      $scrolled = $scrollT;
    } else if ($scrolled - $scrollT > 50) {
      $(".navbar").animate({
          top: '0px'
      },150);
      $scrolled = $scrollT;
    };
    console.log($scrollT);
    console.log($navHeight);
  });


});
