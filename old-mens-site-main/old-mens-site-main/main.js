ScrollOut({
  /* options */
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var mapCanvas = document.getElementById("map");
var mapOptions = {
    center: new google.maps.LatLng(43.63917545700994, -79.38949699497081), zoom: 10
};
var map = new google.maps.Map(mapCanvas, mapOptions);