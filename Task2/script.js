$(window).on('scroll', function () {
    var s = $(window).scrollTop();

    // 3 parallax layers
    $('#l1').css('top', -(s * 0.15) + 'px');
    $('#l2').css('top', -(s * 0.35) + 'px');
    $('#l3').css('top', -(s * 0.55) + 'px');

    // Orbs at different speeds
    $('#o1').css('top', (8  - s * 0.008) + '%');
    $('#o2').css('top', (40 - s * 0.012) + '%');
    $('#o3').css('top', (70 - s * 0.006) + '%');

    // Jellyfish drift with scroll
    $('#j1').css('top', (10 - s * 0.010) + '%');
    $('#j2').css('top', (45 - s * 0.007) + '%');

    // Text panels
    $('#t1').css('transform', 'translateY(' + -(s * 0.04) + 'px)');
    $('#t2').css('transform', 'translateY(' + -(s * 0.03) + 'px)');
    $('#t3').css('transform', 'translateY(' + -(s * 0.02) + 'px)');

    // Progress bar
    var pct = (s / ($(document).height() - $(window).height())) * 100;
    $('#progress').css('width', pct + '%');

    // Depth counter
    $('#dval').text(Math.round(pct * 40));
});
