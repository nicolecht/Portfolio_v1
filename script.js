// jQuery
$(document).ready(function() {
    // Configure navbar appearance on scroll
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0}, 50);
    });

    // Toggle menu/navbar for mobile
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        //$('.menu-btn i').toggleClass("active");
    });

    // Typing animation script
    var typed = new Typed(".typing", {
        strings: ["developer", "42KL cadet", "puzzle-addict"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["developer", "42KL cadet", "puzzle-addict"],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true
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
