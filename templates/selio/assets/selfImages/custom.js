$(".recommendedSellerSliderAJ").owlCarousel({
    loop: true,
    stagePadding: 100,
    nav: true,
    navText: ["<i class='la la-long-arrow-left'></i>", "<i class='la la-long-arrow-right'></i>"],
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    item: 6,
    margin: 15,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      576: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 2,
      },
      1080: {
        items: 2,
      },
      1280: {
        items: 4,
      },
      1540: {
        items: 4,
      },
    },
  });

$(".popularCitiesSliderAJ").owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='la la-long-arrow-left'></i>", "<i class='la la-long-arrow-right'></i>"],
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    item: 6,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

$(".ourBlogSliderAJ").owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='la la-long-arrow-left'></i>", "<i class='la la-long-arrow-right'></i>"],
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    item: 6,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
    },
  });
  
  $(".advertisement_townmannerAJ").owlCarousel({
    loop: true,
    nav: true,
    navText: ["<i class='la la-long-arrow-left'></i>", "<i class='la la-long-arrow-right'></i>"],
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    item: 6,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
  
  
  
//   $('input,textarea').val("");
//   $('.form-group input, .form-group textarea').focusout(function() {
//     var text_val = $(this).val();
//     if (text_val === "") {
//       console.log("empty!");
//       $(this).removeClass('has-value');
//     } else {
//       $(this).addClass('has-value');
//     }
// });