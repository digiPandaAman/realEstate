$(".recommendedSellerSliderAJ").owlCarousel({
    loop: true,
    stagePadding: 100,
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
        items: 3,
      },
      1540: {
        items: 3,
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
