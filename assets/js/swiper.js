const swiper = new Swiper('.swiper', {

    // Default parameters
    slidesPerView: 1.1,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        700: {
        slidesPerView: 2.1,
        spaceBetween: 20
        },
        // when window width is >= 480px
        992: {
        slidesPerView: 3.2,
        spaceBetween: 20
        },
        // when window width is >= 640px
        1300: {
        slidesPerView: 4.2,
        spaceBetween: 40
        }
    },

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
}
);