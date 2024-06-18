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

new Swiper('#swiper-markups', {
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
            slidesPerView: 3,
            spaceBetween: 20
        }
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

new Swiper('#swiper-reviews', {
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
            slidesPerView: 1,
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
            slidesPerView: 2,
            spaceBetween: 5
        }
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

new Swiper('#swiper-youtube', {
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
            slidesPerView: 1,
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
            slidesPerView: 3,
            spaceBetween: 5
        }
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


$('document').ready(() => {
    $('.faq-question').on('click', function () {
        var answer = $(this).next('.faq-answer');
        
        if (answer.is(':visible')) {
            answer.slideUp();
            $(this).removeClass('text-color-primary');
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        } else {
            // $('.faq-answer').slideUp();
            $(this).addClass('text-color-primary');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
            answer.slideDown();
        }
    });

    $('.workSwiper').each(
        (key, value) => {
            console.log()
            var thumb_swiper = $(value).parents()[0].getElementsByClassName('thumbs')[0];

            thumb_swiper = new Swiper(thumb_swiper, {
                spaceBetween: 10,
                slidesPerView: 4,
                loop: true,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });

            new Swiper(value, {
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
                        slidesPerView: 1,
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
                        slidesPerView: 1,
                        spaceBetween: 5
                    }
                }, thumbs: {
                    swiper: thumb_swiper
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        }
    );
});


