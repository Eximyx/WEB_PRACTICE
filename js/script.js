new Swiper('#swiper-prices', {
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

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.2,
            spaceBetween: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1100: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 5
        }
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


$('document').ready(() => {

    var workSwipersAmount = $('.workSwiper').length;

    for (let i = 1; i < workSwipersAmount; i++) {
        new Swiper('#swiper-works-' + i, {
            // Optional parameters
            direction: 'vertical',
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

            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 1
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                1100: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 5
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 5
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 5
                }
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }
});
