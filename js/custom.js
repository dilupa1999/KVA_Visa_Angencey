
  var url = window.location;
  // Will only work if string in href matches with location
  $('ul.navbar-nav a[href="' + url + '"]').addClass('active');
  // Will also work for relative and absolute hrefs
  $('ul.navbar-nav a').filter(function() {
      return this.href == url;
  }).addClass('active');



$(window).on('load', function () {
  $("#preloader").delay(4000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");

  ypos = window.pageYOffset;
  if (ypos > 1) { $(".dwn-pop").fadeOut('0'); }
});     

$(document).ready(function () {
  $('body').addClass('loaded');
  //$('h1').css('color','#222222');

  $('#off-can-trigger').click(function () {
    $('#off-canvas-nav').addClass('open');
  });

  $('#close-off').click(function () {
    $('#off-canvas-nav').removeClass('open');
  });

});

$(document).ready(function () {

});
$(window).scroll(function () {
  ypos = window.pageYOffset;
  var height = $('.nav-top').outerHeight();
  var fullheight = $('.nav-outer').outerHeight();
  if (ypos > fullheight) {
    $('.nav-outer').css('top' ,  '-'+height+'px').addClass('scrolled');
  }
  else {
    $('.nav-outer').css('top' ,  '0px').removeClass('scrolled');
  }
});


