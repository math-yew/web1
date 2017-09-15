$(window).on('scroll', function() {

  var scrollPixel = $(this).scrollTop();
  var screenWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

////////////////////////HOME////////////////////////////////
  // $('.title').css({
  //   'transform':'translateY('+ scrollPixel / 4 + '%)'
  // });

  if(scrollPixel > 75){
  // $('nav').css({'background-color':'#24263d'});
  $('nav').css({'background-color':'#fff'}).css({'opacity':'.85'});
  }

  if(scrollPixel <= 75  && screenWidth > 600){
  $('nav').css({'background-color':'transparent'});
  }

  if(scrollPixel > 200){
  $('.fade1').css({'opacity':'1'});
  }

  if(scrollPixel > 1000){
  $('.fade1').css({'opacity':'1'});
  }

  if(scrollPixel > 600){
  $('.slide').css({
    'transform':'translate(0%, 0%)'
  });
}


  if(scrollPixel > 1250){
  $('.fade2').css({'opacity':'1'});
  }

////////////////////////SERVICE////////////////////////////////

$('.serv-nitric').css({
  'transform':'translate('+ scrollPixel/17 + '%,'+ scrollPixel/20 + '%)'+' rotate(-'+ (10+scrollPixel / 25) + 'deg'
});

////////////////////////PROJECT////////////////////////////////

$('#proj-third').css({'background-color':'rgb('+(255-scrollPixel*.9)+', '+ (255-scrollPixel*.9) +', 255)'});

////////end/////////
});

$('a.sect').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
