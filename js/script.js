var swiper1 = new Swiper(".examples-slider__swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  loop: true,
});

var swiper2 = new Swiper(".reviews", {
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    dynamicBullets: true,
  },
});
