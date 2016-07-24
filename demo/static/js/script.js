$(function(){

	$(function(){
	    $('.carousel').carousel({
	        interval: 2000
	    });
	}())
	
	$(".nav.navbar-nav li").click(function(){
	   $(".nav.navbar-nav li").removeClass('active')
	   if(!$(this).hasClass('active')){
	      $(this).addClass('active')
	    }
	})
})