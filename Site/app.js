function isElementInView(elem){
	var coords = elem.getBoundingClientRect();
	return coords.top >= 0 && coords.left >=0 && coords.bottom <= (window.innerHeight || document.documentElement.clientHeight) && coords.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function addInViewClass(){
	for(var i = 0; i < timelineItems.length;i++ ){
		if(isElementInView(timelineItems[i])){
			 timelineItems[i].classList.add("in-view");
		}
	}
}

var timelineItems = $(".timeline li");


window.addEventListener("load", addInViewClass);
window.addEventListener("scroll", addInViewClass);


$(".open-menu2").click(function(){
	$(this).toggleClass("open");
	if($(this).hasClass("open")){
		// $(".nav").css("display","block");
		// $(".nav").css("margin-top","-100vh");
		$(".nav").css("opacity","1");
		$(".nav").css("z-index","8888");
		$(".nav").css("top","0px");
	}else{
		// $(".nav").css("display","none");
	    // $(".nav").css("margin-top","0");
	     $(".nav").css("opacity","0");
	     $(".nav").css("z-index","-1");
	     $(".nav").css("top","-100vh");
	}

});

$('.smoothScroll').click(function() {
	//alert('click');
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });


$('.navigation-link').click(function() {
	//alert('click');
	console.log(this);
		$(".open-menu2").removeClass("open");
	 	$(".nav").css("opacity","0");
	     $(".nav").css("z-index","-1");
	     $(".nav").css("top","-100vh");
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });


