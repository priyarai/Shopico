$(document).ready(function() {
	
	
	
	var Tooltip = $.fn.tooltip.noConflict();
    $.fn.tooltip = Tooltip;
    $('[data-toggle="tooltip"]').tooltip();
	 
	var win = $(window);
	
	
	if(win.width() > 991) {	
	win.scroll(function() {
		var scrolltop = win.scrollTop();
		var divScrolltop = $('.main-navigation').scrollTop();
		var headerScrolltop = $('.common-slider').height();
		
		
		if( (win.scrollTop() > divScrolltop) ){
			
			$('.main-header').addClass('fixed-header').css({'top': '0' ,'position':'fixed'});
			$('.main-navigation').css('opacity','0');
				
		}
		else
		{
			$('.main-header').removeClass('fixed-header').css({'top': 'auto' ,'position':'relative'});
			$('.main-navigation').css('opacity','1');
		}
		if(win.scrollTop() > headerScrolltop){ 
			  $('.main-header').addClass('change-top-bar');
			}
			
		 else {
				  $('.main-header').removeClass('change-top-bar');
		 }
	
	});
	
	}
	
	
	$('.toggle-menu').click(function() {
		var mainTop = $('.main-header').offset().top;
		$('.main-body').toggleClass('main-body-slideleft common-body-css');
		$('.body-left').toggleClass('slide-body-left');
		$('body').addClass('toggle-open-css');
		
		$('.main-header').css({'top':mainTop,'position':'absolute' });
		
		
	});
	
	
	$('body').click(function(e) { 
		var txtIsClose = 1;		
		
		if($('.main-body').hasClass('common-body-css')){
		
		if ( $(e.target).closest(".toggle-menu, .user-info-image .user-avatar, .slide-body-left").length > 0 ) { txtIsClose = 0; }
		if ( $(e.target).hasClass('.toggle-menu, .user-info-image .user-avatar, .slide-body-left') ) { txtIsClose = 0; }
		
		if( txtIsClose == 1 )
		{
			$('.main-body').removeClass('main-body-slideleft common-body-css');
			$('.body-left').removeClass('slide-body-left');
			$('.slide-toggle li').children('ul').slideUp();
			$('.slide-toggle li').removeClass('active');
		    $('body').removeClass('toggle-open-css');
			
			if(win.width() > 991) {	
				setTimeout(function(){
				$('.main-header').css({'top': '0' ,'position':'fixed'});
				}, 500);	
			  }
			}
		}
	});
	
	
	$('.user-info-image .user-avatar').click(function() {
		
		$('.main-body').toggleClass('main-body-slideright, common-body-css')
		$('.body-right').toggleClass('slide-body-right')
	});
	



	$('.slide-toggle li').click(function(e) {
		e.stopPropagation();
		$(this).children('ul').slideToggle();
		var checkChildElem = $(this).closest('ul').attr('class');
		
		if(checkChildElem=='slide-toggle'){
			$('ul.slide-toggle >li').removeClass('active');
			$(this).addClass('active');
		}
	});


/*============= SLider JS =========*/

			
			    $(".carousel-control, .carousel-indicators li").on("click", function() {				
				$( ".fadeInUp_h2" ).removeClass('visible animated fadeInUp').addClass('hidden_css');
				$( ".fadeInUp_h5" ).removeClass('visible animated fadeInUp').addClass('hidden_css');
				$( ".fadeInUp_button" ).removeClass('visible animated fadeInUp').addClass('hidden_css');
    			$( ".fadeInUp_para" ).removeClass('visible animated fadeInUp').addClass('hidden_css');				
				if($( ".fadeInUp_h2" ).hasClass('visible')){				
					$( ".fadeInUp_h2" ).removeClass('visible animated fadeInUp').addClass('hidden_css');					
				} else {
					setTimeout(function(){
						$( ".fadeInUp_h2" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
					}, 300);					
				}	
				if($( ".fadeInUp_h5" ).hasClass('visible')){				
					$( ".fadeInUp_h5" ).removeClass('visible animated fadeInUp').addClass('hidden_css');					
				} else {
					setTimeout(function(){
						$( ".fadeInUp_h5" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
					}, 500);					
				}				
				if($( ".fadeInUp_para" ).hasClass('visible')){	
					$( ".fadeInUp_para" ).removeClass('visible animated fadeInUp').addClass('hidden_css');					
				} else {
					setTimeout(function(){
						$( ".fadeInUp_para" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
					}, 700);					
				}				
				if($( ".fadeInUp_button" ).hasClass('visible')){	
					$( ".fadeInUp_button" ).removeClass('visible animated fadeInUp').addClass('hidden_css');					
				} else {
					setTimeout(function(){
						$( ".fadeInUp_button" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
					}, 900);						
				}
			});
			
			
			$('.carousel').carousel({
			  interval: false
			})
			
	
$('[data-type="opacity"]').each(function(){
	
        var $bgobj = $(this); 
    
        win.scroll(function() {
            var yPos = -(win.scrollTop() / $bgobj.data('speed')); 
            var coords =  yPos + 'px';
			
            $bgobj.css({ 'transform' : 'translateY('+coords+')', '-webkit-' : 'translateY('+coords+')', '-ms-' : 'translateY('+coords+')', '-o-' : 'translateY('+coords+')'});
			
        }); 
    }); 
		 
			

	
win.load(function(){			

		if($( ".fadeInUp_h2" ).hasClass('visible')){              
                    $( ".fadeInUp_h2" ).removeClass('visible animated fadeInUp').addClass('hidden_css');                    
                } else {
                    setTimeout(function(){
                        $( ".fadeInUp_h2" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
                    }, 300);                    
                }  
				
				if($( ".fadeInUp_h5" ).hasClass('visible')){              
                    $( ".fadeInUp_h5" ).removeClass('visible animated fadeInUp').addClass('hidden_css');                    
                } else {
                    setTimeout(function(){
                        $( ".fadeInUp_h5" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
                    }, 500);                    
                }  
				
				             
                if($( ".fadeInUp_para" ).hasClass('visible')){  
                    $( ".fadeInUp_para" ).removeClass('visible animated fadeInUp').addClass('hidden_css');                  
                } else {
                    setTimeout(function(){
                        $( ".fadeInUp_para" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
                    }, 700);                    
                }               
                if($( ".fadeInUp_button" ).hasClass('visible')){    
                    $( ".fadeInUp_button" ).removeClass('visible animated fadeInUp').addClass('hidden_css');                    
                } else {
                    setTimeout(function(){
                        $( ".fadeInUp_button" ).removeClass('hidden_css').addClass('visible animated fadeInUp');
                    }, 900);                        
                }	
				
				
								
	});
	
	$('.video-player').click(function() {
		$('#video-player').attr("src", $('#video-player').attr("src").replace("autoplay=0", "autoplay=1"));
		$('.fadeInUp_h2, .fadeInUp_h5, .video-player').addClass('hidden_css');
    });
	
	$('.carousel-control').click(function(e) {
       $('#video-player').attr("src", $('#video-player').attr("src").replace("autoplay=1", "autoplay=0")); 
    });
		
		
		
		
/*========= Tab Panel Js ========*/


$('.tabbing-panel a').click(function() {
		
		var tabID = '#'+$(this).attr('rel');
		var parentID = '#'+$(this).parents('section').attr('id');
		
		$(parentID+' .tabbing-panel a').removeClass('active');
		$(this).addClass('active');
		$(parentID+' .tabpanel-container').removeClass('show-tab');
		$(tabID).addClass('show-tab');
		$(parentID+' .products-grid').css({'opacity':0,'margin-top':'150px'});
		
		var delay = 0;
		
		
		$(tabID+' .products-grid').each(function(){ 
		
		 $(this).delay(delay).animate({opacity:1, marginTop:'0px'}, 500);
		 
		  delay += 300;
		});
    });


/*========= back to top js ========*/



win.scroll(function() {
    if ($(this).scrollTop()) {
        $('#back-to-top').css({'opacity':1,'bottom':'10px'});
    } else {
       $('#back-to-top').css({'opacity':0,'bottom':'80px'});
    }
});

$("#back-to-top").click(function () {
 
   $("html, body").animate({scrollTop: 0}, 1000);
});

/*========= Search Keypress Function ========*/


  $(".header-search-form input").keypress(function(){
	
	$('.main-container').append('');  
		
  });




/*========= notification js ========*/


$('.close-notification-css i').click(function(e) {
	
	$('.notification-popup').fadeOut('1000');
});
	
	
	
/*===== Quick View JS =====*/
 
$('.quick-view-icon').click(function() {
	
	var mainBox = $(this).attr('rel');
	
	setTimeout(function(){ $('body').append('<div class="box-overlay"></div>').addClass('modal-box-css'); }, 300);
	setTimeout(function(){ $(mainBox).addClass('boxDetail'); }, 400);
	
    
});

$('.close-quick').click(function() {
  
  setTimeout(function(){ $('body').removeClass('modal-box-css'); }, 400);
  setTimeout(function(){ $('.quick-view-detail').removeClass('boxDetail'); $('.box-overlay').remove() }, 600);  
});	




$('.pro-des-common .address-acc').on('click',function(e){
    if($(this).parents('.pro-accordion').children('.panel-collapse').hasClass('in')){
        e.stopPropagation();
    }
});


/*========= Accordion Js ========*/

$('.panel-heading a').on('click',function(e){
    if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
        e.stopPropagation();
    }
});

$('.shipping-mobile-css a[data-toggle="collapse"]').click(function () {
	$(this).find('i').toggleClass('fa-plus fa-minus');
})


/*========= social-sharing-pop ========*/


$('.social-sharing-pop a.last').click(function() {
  
 $('.social-sharing-pop').toggleClass('showLi'); 
 $(this).find('i').toggleClass('fa-caret-left');
  
});

$('.share-common .dropdown-menu li a').click(function(e) {
	$('.share-common .dropdown-toggle').text($(this).text());
	$('.share-common .dropdown-menu li').removeClass('active');
	$(this).parents('li').addClass('active');
	$('.share-common .input-box input').attr("placeholder",$(this).attr('data-text'));
		if($(this).attr('class') == 'own-wall'){ 
			 $('.share-common .input-box input').hide();
			}
		else { 
			$('.share-common .input-box input').show();
			
			}
});

$('.pop-pro-image a').click(function() {
	
	$('#ask-question').modal("hide");
    
});


/*========= Landing Page Js ========*/

$('.another-css').click(function() {
  $(this).hide();
  $('.collection-add').show();  
	
return false;	
});


$('.see-more-css').click(function(e) {
	$(this).hide();
    $('.show-new-list').show();
});










});


/*========= Register/login Js ========*/

$('.login-button').click(function() {
   
   $('#register').modal('hide');
   $('body').addClass('open-popup');
});

$('.register-button').click(function() {
	$('#login-form').modal('hide');
	$('body').addClass('open-popup');
	
});

$('.close').click(function() {
    $('body').removeClass('open-popup');
});



/*========= FLip Effect Function Js ========*/

function flipEffect(elem, value){
	
	elem.css({'transform': 'rotateY('+value+'deg)','-o-transform': 'rotateY('+value+'deg)','-webkit-transform': 'rotateY('+value+'deg)','-ms-transform': 'rotateY('+value+'deg)'});
	
	}



/*========= Function Show/ Hide Div Js ========*/

function divShow(elem, classElem){
	$(elem).click(function() {
        
		var eleId = $(this).attr('rel');
		$(classElem).hide();
		$(eleId).show();
		
    });
	
	$('body').click(function(event) {
		
	   if(($(event.target).closest(elem).length == 0) && ($(event.target).closest(classElem).length == 0)){
		    $(classElem).hide();
		   }
    });
	
	
	
}


function toggleChevron(e) { 
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('fa fa-minus fa fa-plus');
		
}


