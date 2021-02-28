$(function () {

  $('.on-sale__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/icons/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/icons/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 952,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 642,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.header-bg__inner').slick({
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    appendArrows: $('.slick-arrows'),
    prevArrow: '<button type="button" class="arrows-left arrows-slider"><img src="images/icons/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="arrows-right arrows-slider"><img src="images/icons/next.svg" alt=""></button>'
  });

  $('input, select').styler();

  $('.product-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow: '<button type="button" class="arrows-left arrows-slider"><img src="images/slider/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="arrows-right arrows-slider"><img src="images/slider/next.svg" alt=""></button>',
    asNavFor: '.product-slider-nav',
    speed: 250,
  });
  $('.product-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-slider-for',
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    speed: 250,
    responsive: [
      {
        breakpoint: 932,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $('.menu-btn').on('click', function () {
    $('.header__menu-list').slideToggle()
  });

  new WOW({
    offset: 50
  }).init();

});