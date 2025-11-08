var swiper = new Swiper('.reviews-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1, // Only 1 slide on screens smaller than 768px
        },
        1024: {
            slidesPerView: 2, // 2 slides visible on medium screens
        },
        1440: {
            slidesPerView: 3, // 3 slides visible on larger screens
        },
    }
});
