$(document).ready(function () {
    $('#h-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        center: true,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
        }
    })
    $('#p-slider').owlCarousel({
        loop: true,
        margin: 20,
        stagePadding: 0,
        navText: [
            "<i class='bx bxs-left-arrow-alt'></i>",
            "<i class='bx bxs-right-arrow-alt'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            },

            500: {
                items: 2,
                nav: true,
                dots: false
            },
            800: {
                items: 3,
                nav: true,
                dots: false
            },

            1200: {
                items: 3,
                nav: true,
                dots: false
            }
        }
    })
    $('.c-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        center: true,

        responsive: {
            0: {
                items: 1,
            },
        }
    })
})
