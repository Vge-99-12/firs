$(document).ready(function () {
   $(".my__slick_slider").slick({
      arrows: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      centerMode: true,
      responsive: [
         {
            breakpoint: 925,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 750,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 625,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   })
});