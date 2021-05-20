$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    /* nav:true para que as setas sejam habilitadas*/
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})