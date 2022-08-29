// Configure navbar appearance on scroll using jQuery
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });

    // Toggle menu/navbar for mobile
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        //$('.menu-btn i').toggleClass("active");
    });

    // Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        aitoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0:{
                items: 1,
                nav: false
            },
            // breakpoint from 600 up
            600:{
                items: 2,
                nav: false
            },
            // breakpoint from 960 up
            960:{
                items: 3,
                nav: false
            }
        }
    });
});
