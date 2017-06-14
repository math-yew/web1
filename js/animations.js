$(window).on('scroll', function() {

  var scrollPixel = $(this).scrollTop();
  // console.log(scrollPixel);

  // $('.hamburger').on('hover', function () {
  // $('.hamburger').css({'background-color':'red'});
  // $('.nav-bar ul').css({'display':'inline'});
  // });

  $('.title').css({
    'transform':'translateY('+ scrollPixel / 4 + '%)'
  });

  if(scrollPixel <= 100){
  $('nav').css({'background-color':'transparent'});
  }

  if(scrollPixel > 75){
  $('nav').css({'background-color':'#444'});
  }

  if(scrollPixel <= 75){
  $('nav').css({'background-color':'transparent'});
  }

  if(scrollPixel > 200){
    console.log('fade in: ');
  $('.fade1').css({'opacity':'1'});
  }

  if(scrollPixel > 1000){
  $('.fade1').css({'opacity':'1'});
  }

  if(scrollPixel > 1100){
  $('.slide').css({
    'transform':'translate(0%, 0%)'
  });
}


  if(scrollPixel > 1250){
  $('.fade2').css({'opacity':'1'});
  }


////////end/////////
});

$('a.sect').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
