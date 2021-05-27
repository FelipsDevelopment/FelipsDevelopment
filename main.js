
$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    
    $('nav a[href*="#"]').on('click', function (e) {
        if(this.hash != ''){
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },2000)
        }
    });


        
    $('#up').on('click', function (e) {
        if(this.hash != ''){
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: 0
            },2000)
        }
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});