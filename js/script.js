function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 3000 );
});

$(function(){	
	$("a[href*=#]:not([href=#])").click(function(){
		
		var target = $($(this).attr("href")).offset().top;
		
		$("html, body").animate({scrollTop: target}, 500);

		return false;
	});
});