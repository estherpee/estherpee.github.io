'use strict';



$(document).ready(function(){
	
    $(".light-icon").click(function(){
		$(".wakeup-img").attr("src", "images/wake-up.gif").attr("alt", "wake-up");
		// $(".state-2").attr("src", "images/philips.gif").attr("alt", "sleeping");
    });

	$(".coffee-icon").click(function(){
		$(".coffee-img").attr("src", "images/coffee.gif").attr("alt", "coffee");
		// $(".state-2").attr("src", "images/philips.gif").attr("alt", "sleeping");
    });

    $(".cup-icon").click(function(){
    	$(".cups-img").attr("src", "images/cups.gif").attr("alt", "cups");

    });

    $(".ollie-icon").click(function(){
    	$(".ollie-img").attr("src", "images/ollie.gif").attr("alt", "ollie");

    });

    $(".light-off-icon").click(function(){
    $(".goodnight-still").attr("src", "images/goodnight.gif").attr("alt", "wake-up");
    // $(".state-2").attr("src", "images/philips.gif").attr("alt", "sleeping");
    });
  //  	$(".product-img-sub-2").click(function(){
		// $(".product-img-main > .main-img").attr("src", "images/gladiator-ring-silver-1.jpg").attr("alt", "Gladiator Ring Silver");
		// $(".product-img-main > .alternate-img").attr("src", "images/gladiator-ring-silver-2.jpg").attr("alt", "Gladiator Ring Silver");
  //   });

  //   $(".product-img-sub-3").click(function(){
		// $(".product-img-main > .main-img").attr("src", "images/gladiator-ring-both.jpg").attr("alt", "Gladiator Ring Silver and Gold");
		// $(".product-img-main > .alternate-img").attr("src", "images/gladiator-ring-both.jpg").attr("alt", "Gladiator Ring Silver and Gold");
	
  //   });



});
