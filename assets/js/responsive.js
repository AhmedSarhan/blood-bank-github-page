$('.header-1 .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    rtl:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:1,
            nav:false,
            dots:true
        },
        1000:{
            items:1,
            nav:false,
            dots:true
        }
    }
})
// Articles Section 
$('.section-articles .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    rtl:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:1,
            nav:false,
            dots:true
        },
        1000:{
            items:3
        }
    }
})
