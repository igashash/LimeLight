$(window).bind('scroll', function () {
    parallaxScroll();
});

function parallaxScroll() {

    var scrolled = $(window).scrollTop();

    $('.layer-1').css('top', (0 - (scrolled * 0.25)) + 'px');
    $('.layer-2').css('top', (0 - (scrolled * 0.45)) + 'px');
    $('.layer-3').css('top', (0 - (scrolled * 0.7)) + 'px');

    $('.layer-5').css('top', (0 - (scrolled * 0.15)) + 'px');
    $('.layer-6').css('top', (0 - (scrolled * 0.35)) + 'px');
    $('.layer-7').css('top', (0 - (scrolled * 0.55)) + 'px');

    $('.planet-1').css('top', (100 - (scrolled * 0.15)) + 'px');
    $('.planet-2').css('top', (180 - (scrolled * 0.25)) + 'px');

    $('.stars-1').css('top', (150 - (scrolled * 0.2)) + 'px');
    $('.stars-2').css('top', (300 - (scrolled * 0.25)) + 'px');

    $('.meteor-1').css('top', (120 - (scrolled * 0.6)) + 'px');
    $('.meteor-2').css('top', (250 - (scrolled * 0.5)) + 'px');

    $('.rock-1').css('top', (300 - (scrolled * 0.8)) + 'px');
    $('.rock-2').css('top', (500 - (scrolled * 0.6)) + 'px');
    $('.rock-3').css('top', (700 - (scrolled * 0.5)) + 'px');
    $('.rock-4').css('top', (900 - (scrolled * 0.7)) + 'px');
    $('.rock-5').css('top', (650 - (scrolled * 0.4)) + 'px');
    $('.rock-6').css('top', (400 - (scrolled * 0.3)) + 'px');
}
