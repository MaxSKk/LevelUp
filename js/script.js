$(function () {
   $('.reviews__slider').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
   });

   $('a[href*="#"]').on('click', function () {
      $('html, body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
   });

   blocktimer('#timer', '2010, 7, 1', 30 * 60 * 1000);

});