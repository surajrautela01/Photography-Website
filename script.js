    var swiper = new Swiper('.swiper-container', {
        pagination: {
        el: '.swiper-pagination',
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
    document.addEventListener('DOMContentLoaded', function() {
        var myCarousel = document.getElementById('testimonialCarousel');
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 1000 
        });
    });
    $(document).ready(function(){
        $(".nav-link[href='#testimonial']").click(function(){ // Update ID here
            $('html, body').animate({
                scrollTop: $("#testimonial").offset().top
            }, 1000);
        });
    });