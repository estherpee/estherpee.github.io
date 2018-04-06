'use strict';


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >200) {
    $('.box-container').fadeOut(200);
  } else {
    $('.box-container').fadeIn(200);
  }
  if (y >100) {
    $('.line').fadeOut(100);
  } else {
    $('.line').fadeIn(100);
  }

  if (y >100) {
    $('.work-collage').fadeIn(100);
  } else {
    $('.work-collage').fadeOut(100);
  }
});