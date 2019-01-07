$(document).ready(function() {
  $("#intro").hide();
  var topOfPic = $('#profile-pic').offset().top + 20;
  var topOfGreet = $('#profile-pic').offset().top;
  console.log(topOfPic);

  $(window).scroll(function() {
    if ($(window).scrollTop() > topOfPic) {
      $('#scroll').hide();
      $("#intro").fadeIn();
    } else {
      $("#intro").fadeOut();
      $('#scroll').fadeIn();
    }
  });
  //Implements the smooth scrolling, from https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
  // Add smooth scrolling to all links
  $("#About").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $("#Work").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});
