'use strict';


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >200) {
    $('.box-container').fadeOut(200);
  } else {
    $('.box-container').fadeIn(200);
  }
});