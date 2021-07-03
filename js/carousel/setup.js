$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        800: {
            items: 4
        },
        1100: {
            items: 5
        },
        1400: {
            items: 6
        }
    }
});

$("header .container");
jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 10) {
            $("header .container").css('background-color', 'rgba(20,20,20)');
            $("header .container").css('transition', '.3s ease all');
        } else {
            $("header .container").css('background-color', 'rgba(0,0,0,0)');
        }
    });
});