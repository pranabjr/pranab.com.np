$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


    $('.fore-box').css({
      'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
    });

  });