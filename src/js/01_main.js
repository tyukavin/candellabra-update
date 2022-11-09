$(document).ready(function() {

    Fancybox.bind("[data-fancybox]", {
        Thumbs: {
            autoStart: false,
        },
        Toolbar: {
            display: [
              { id: "prev", position: "center" },
              { id: "counter", position: "center" },
              { id: "next", position: "center" },
              "zoom",
              "close",
            ],
          },
    });

    $('.btn-select').niceSelect();

    $('.js-related-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        prevArrow: '.product-related__slider-side--prev',
        nextArrow: '.product-related__slider-side--next',
        infinite: false,
    });

    $('.js-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-slider-nav',
        adaptiveHeight: true,
        draggable: false,
    });

    $('.js-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '.product-slider__step--prev',
        nextArrow: '.product-slider__step--next',
        asNavFor: '.js-slider-main',
        focusOnSelect: true,
        vertical: true,
        adaptiveHeight: true,
        centerMode: true,
    });

    $('.faq__item').click(function() {
        $(this).toggleClass('show');
    });

    $('.js-btn-show-more').click(function() {
        $(this).text($(this).text() == 'Показать больше' ? 'Скрыть' : 'Показать больше');
        $('.product-description__content').toggleClass('show');
    });

    $('.map__nav-countries').click(function() {
        $(this).toggleClass('active');
        $('.list-city').toggleClass('show');
    });

    $('.map__nav-city').click(function() {
        $(this).toggleClass('active');
        $(this).parent().find('.map__nav-city-list').toggleClass('show');
    });

});