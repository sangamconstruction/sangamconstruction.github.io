var carouselIndicators = '';
var carouselItem = '';
$.ajax({
  method: "GET",
  url: "https://api.pexels.com/v1/search?query=construction",
  headers: {
    'Authorization': '563492ad6f917000010000016b911fd3ff42455e9187f4b0302968aa',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})
.done(function( response ) {
  $.each(response.photos, function(index, value) {
    /*
    if(index == 0){
      carouselIndicators += '<li data-target="#carouselIndicators" data-slide-to="' + index + '" class="active"></li>';
      carouselItem += '<div class="carousel-item active"><img class="d-block w-100" src="' + value.src.medium + '" alt="' + value.photographer + '"></div>';
    }
    */
    carouselIndicators += '<li data-target="#carouselIndicators" data-slide-to="' + index + '"></li>';
    carouselItem += '<div class="carousel-item"><img class="d-block w-100" src="' + value.src.medium + '" alt="' + value.photographer + '"></div>';
  });
  $(".carousel-indicators").append(carouselIndicators);
  $(".carousel-inner").append(carouselItem);
});

$('.carousel').carousel({
  interval: 2000
})

function goToSection(section){
  $('html,body').animate({scrollTop: $('#' + section).offset().top}, 200, function() {
    $('#' + section).focus();
  });
}

function changeSlide(direction){
  $('.carousel').carousel('' + direction);
}

// setInterval(function(){
  // $("#aboutus").animate({"color" : "#efbe5c"}, 500);
  // console.log('in here');
// }, 2000);