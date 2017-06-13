$(window).on('scroll', function() {

  var scrollPixel = $(this).scrollTop();
  console.log(scrollPixel);
  
  $('.hamburger').on('click', function () {
  $('.nav-bar').css({'display':'inline'});
  });

  $('.title').css({
    'transform':'translateY('+ scrollPixel / 4 + '%)'
  });

  if(scrollPixel <= 100){
  $('nav').css({'background-color':'transparent'});
  }

  if(scrollPixel > 100){
  $('nav').css({'background-color':'#444'});
  }

  if(scrollPixel <= 100){
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
