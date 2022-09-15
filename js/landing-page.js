/*========= Category Carousel ========*/

var owl = $("#category_carousel");		
		owl.owlCarousel({		
			items : 4, //10 items above 1000px browser width
			itemsDesktop : [1000,4], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0;
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option		
			rewindNav: false,
			pagination : false,
		 navigation:true,
       navigationText: [
      "<a></a>",
      "<a></a>"
      ],
		});
