$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


    $('.fore-box').css({
      'transform' : 'translate(0px, -'+ wScroll /32 +'%)'
    });
    
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)'
    });
    
    $('.sicons').css({
      'transform' : 'translate(0px, '+ wScroll /20 +'%)'
    });

    $('.back-box').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });

  });