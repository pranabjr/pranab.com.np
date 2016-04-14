$(window).scroll(function(){

  var wScroll = $(this).scrollTop();


    $('.fore-box').css({
      'transform' : 'translate(0px, -'+ wScroll /21 +'%)'
    });
    
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /30 +'%)'
    });
    
    $('.sicons').css({
      'transform' : 'translate(0px, '+ wScroll /30 +'%)'
    });

    $('.back-box').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });

  });