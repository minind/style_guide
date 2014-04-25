$(function() {
    $( "#search-tabs" ).tabs( { active: 0 } );
    $( "#price-list-tabs" ).tabs( { active: 0 } );

    var bannerTop = $('#top-banner');
    var bannerTopClose = $('#banner-close');
    var sliderPager = $('#slider-announce-pager');

    bannerTopClose.on('click', function(){
    	bannerTop.slideUp('slow');
    })

    $('#slider-announce ul').bxSlider({
		pagerCustom: '#slider-announce-pager',
		nextSelector: '#slider-prev',
		prevSelector: '#slider-next',
		nextText: 'Next',
		prevText: 'Prev',
		startSlide: 0
	});

	//pager movements

	var pagerLen = sliderPager.find('a').length;
	var pagerSpeed = ( pagerLen <= 3 ) ? 0 : 0.07 * (pagerLen + 1);
	sliderPager.css('width', (pagerLen + 1) * (135 + 26)+ 'px')

	sliderPager.on('mouseover', function() {
		var $this = $(this);
		var parentOffset = $this.offset().left;
		var x = event.pageX - parentOffset;			

		$this.css({
			'margin-left': -( pagerSpeed * x)
		})
	});

	//search tabs list

	var searchBtn =  $('.search-tab-field');
	var searchList = $('.search-tab-list-item');
	var arrow = $('.search-list-button-arrow')

	searchBtn.on('click', function() {
		$(this).find(arrow).toggleClass('up')
		$(this).next().slideToggle();
	});
});