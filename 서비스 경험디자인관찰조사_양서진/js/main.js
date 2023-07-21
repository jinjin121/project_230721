$(function () {
    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainMenu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();

        $('.subMenu_box .subMenu').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.Exhibition_box').slick({
        autoplay: true,
        slidesToShow: 4,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: $('.Exhibition_arrows_prev'),
        nextArrow: $('.Exhibition_arrows_next'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})