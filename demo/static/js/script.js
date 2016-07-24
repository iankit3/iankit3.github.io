$(function(){
	$(".nav.navbar-nav li").click(function(){
	   $(".nav.navbar-nav li").removeClass('active')
	   if(!$(this).hasClass('active')){
	      $(this).addClass('active')
	    }
	})
}())