$(function(){
	
	
		var owl = $("#apply_offers");	
			owl.owlCarousel({		
				items : 3,
				itemsDesktop : [1000,3],
				itemsDesktopSmall : [900,3],
				itemsTablet: [600,1],
				itemsMobile : false,
				rewindNav: false,
				pagination : false,
				navigation:true,
				afterAction: function(){
				if ( this.itemsAmount > this.visibleItems.length ) {
					$('.next').show();
					$('.prev').show();
			
					$('.next').removeClass('disabled');
					$('.prev').removeClass('disabled');
					if ( this.currentItem == 0 ) {
						$('.prev').addClass('disabled').removeAttr('style');
					}
					if ( this.currentItem == this.maximumItem ) {
						$('.next').addClass('disabled').removeAttr('style');
					}
			
				} else {
					$('.next').hide();
					$('.prev').hide();
				}
			},
				navigationText: [
				"<a></a>",
				"<a></a>"
			],
			});
	
/*========= BUY NOW PAGE JS ========*/


$('.promo-code a').click(function() {

  $($(this).attr('rel')).slideDown();
  $(this).parent('p').text('Enter Promo Code');
    
});
	
/*========= Payment Methode JS ========*/

$('.payment-option-mid .tab-pane').hide();
$('.payment-option-mid .tab-pane:first-child').show();

$('.payments-options .tabs-left li a').click(function() {
	
	$('.payment-details-headerleft span').text($(this).text());
	$('.payment-option-mid .tab-pane').hide();
	$($(this).attr('href')).show();
	$('.emi_values, .transaction-form, .payment-details-header > p').hide();
	$('.emi_values .radio input').prop('checked', false);
    
});


$('.payment-option-mid .dropdown-menu a').click(function() {
    
	$('.emi_values').hide();
	$($(this).attr('rel')).show();
	
	$('.payment-option-mid .dropdown-toggle').html($(this).text()+'<b class="caret"></b>');
	
	
});

$('.emi_values .radio input').click(function() { 
	
	if($(this).is(":checked")){
			
		  $('.transaction-form').show();
		
		}

});

$('#apply_offers .bp-options').click(function() { 
	if($(this).is(":checked")){
			
		  $('.payment-details-header > p').show();
		
		}

});







$('#bank_promotional li input').click(function() {
	
 var bankID =	$(this).attr('data-offers');
  
  if($(this).is(":checked")){
	  $('.bank-detail-in').remove();
	  $('#bank_promotional li').removeClass('active');
	  $(this).parents('div.radio').closest('li').append('<div class="bank-detail-in" id="'+bankID+'"><p>Minimum transaction value - Rs 5000</p><b>Enter your code No</b><input type="text" class="form-control" name=""><div class="controls"><a class="button button-color" href="javascript:;">Apply</a></div></div>').addClass('active');
	  
  }
  
  
    
});


$('.common-accordion .address-acc').click(function() {
	
	$(this).find('input').prop('checked',true);	
	var hrefNew = $(this).attr('href');
	$('.emi_values').hide();
	
	$('.common-collapse').slideUp();
	if($(hrefNew).css('display') == 'none'){
		$(hrefNew).slideDown();
	}
	
	
	
	return false;
	
    
});

});