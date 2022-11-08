$(document).ready(function() {

    $('.js-related-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
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

});