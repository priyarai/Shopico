$(function(){
	

divShow('.pro-view-icons a', '.common-pro-css')	

$('.common-pro-css .last a').click(function() {
    
	$(this).hide();
	$(this).parents('li.last').append('<input name="" type="checkbox" checked><input name="" type="text">')
	
	
});

/*  $('.reviews_css .tabbing-panel a').click(function(e) {
	  if($(this).attr('href')=='#reviews_rate'){
	  $('.indicator').css({left:'-112px'});
	  }
	  if($(this).attr('href')=="#faq"){
		   $('.active .indicator-reviews').css({left:'50%',right:'0'});
		  
		  }
    
  });*/

$('.pro-star-rating a').click(function() {

	     $('.watchers-section').removeClass('active in'); 
         var z = $(this).attr('rel');
		 $('.tabbing-panel li').removeClass('active')
		 $($(this).attr('data-type')).addClass('active');
		 $(z).addClass('active in'); 
     	 var x = $(z).offset().top - $('.main-header').height();
		 $("html, body").animate({scrollTop: x}, 1000);
	
    });
	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	