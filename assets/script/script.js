function scrollWin() {
  window.scrollTo(0, 1050);
}

function scrollWin2() {
  window.scrollTo(0, 2000);
}

$(document).ready(function() {
  var diff = $("#layout_back").offset().top - 400;
  //console.log(diff);

  $(window).scroll(function() {
    if ($(window).scrollTop() > diff) {
      $("#book").fadeIn();
    } else {
      $("#book").fadeOut();
    }
  });

  var diff2 = $("#tools_back").offset().top - 800;

  $(window).scroll(function() {
    if ($(window).scrollTop() > diff2) {
      $("#pen").fadeIn();
    } else {
      $("#pen").fadeOut();
    }
  });

});
