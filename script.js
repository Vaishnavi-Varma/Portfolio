$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY >= 20) {
            $('.nav').addClass("sticky");
        }
        else {
            $('.nav').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll__up__btn').addClass("show");
        }
        else {
            $('.scroll__up__btn').removeClass("show");
        }
    })

    // Toggle menu/nav script
    $('.menu-btn').click(function() {
        $('.nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    // slide-up script
    $('.scroll__up__btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Typing Animation. 
    var typed = new Typed(".typing__1", {
        strings: ["E&TC Engineer.", "Web Developer.", "Learning Enthusiast."],
        typeSpeed: 40,
        backSpeed: 60,
        loop: true
    })
});