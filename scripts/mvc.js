var link = $('.com__nav-link');
var linkParent = link.parent('li');
var section = $('.com__section');
var sectionContent = section.find('*');
var slides = $('.slides');

var switchTab = function() {
	var p = $(this).parent('li');
	var i  = p.index();
	var s = section.eq(i);
	var c = s.find('*');
	
	section.removeClass('active');
	sectionContent.removeAttr('style');
	s.addClass('active');
	
	c.css({
		transform: 'none',
		opacity: 1
	});
	
	linkParent.removeClass('active');
	p.addClass('active');
	
	return false;
};

link.on('click', switchTab);

function activeFirst() {
	section.first().addClass('active');
	section.first().find('*').css({
		transform: 'none',
		opacity: 1
	});
	linkParent.first().addClass('active');
}

activeFirst();

Reveal.addEventListener( 'mvcState', function() {
	slides.css({"zoom": "1", "height": "100%"})
	$('pre code').each(function(i, block) {
	  	hljs.highlightBlock(block);
	});
});

Reveal.addEventListener( 'slidechanged', function( event ) {
	//console.log(event.previousSlide, event.currentSlide, event.indexh, event.indexv);
} );

$('img').off('mouseover').off('mouseout').on('mouseover', function() {
	$('h2').css('color', '#404855')
}).on('mouseout', function() {
	$('h2').css('color', 'white')
})

