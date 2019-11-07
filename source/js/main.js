// $('.header-slider').slick({
//     autoplay: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerPadding: 0,
//     centerMode: true,
//     pauseOnDotsHover: true,
//     dots: true,
//     arrows: false
//   });

  $('.header-slider').slick({
    centerMode: true,
    centerPadding: '260px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '240px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '240px',
          slidesToShow: 1
        }
      }
    ]
  });