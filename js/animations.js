$(window).on('scroll', function() {
  var magic = $(this).scrollTop();
  console.log(magic);

  var shooting = .1*Math.abs(500-magic);

  // $('.slide').css({
  //   'transform':'translateX(50%)'
  // });

  $('.star').css({
    'transform': 'translateY(' + .25*magic + '%) translateX(-' + shooting + '%)'
  });

  $('.title').css({
    'transform':'translateY('+ magic / 4 + '%)'
  });

  if(magic > 200){
    console.log('fade in: ');
  $('.fade1').css({'opacity':'1'});
  }

  if(magic > 1000){
  $('.fade1').css({'opacity':'1'});
  }

  if(magic > 1100){
  $('.slide').css({
    'transform':'translate(0%, 0%)'
  });
}


  if(magic > 1250){
  $('.fade2').css({'opacity':'1'});
  }




    $('.headline').css({
    'transform': 'translate(+' + magic / 8 + '%) rotateY('+magic+'deg)'
  });
});
