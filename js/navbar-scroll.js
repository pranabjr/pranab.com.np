var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('.main-box').height()-20;

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});