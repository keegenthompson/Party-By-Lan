// Changing the time interval for the carousel
$(document).ready(function(){
    $("#myCarousel").carousel({interval: 3000});
});

//fade thumbnail images and display partyName overlay
  $(document).ready(function() {    
    $(".thumbImg").on("mouseenter", function() {  // Initiate a function when the mouse enters an element with the class thumbImg
      $(this).css("opacity", 0.3).next().show().css("color", "black");  // Fade out the img and show the partyName
    });
    $(".thumbImg").on("mouseout", function() {  // Once the mouse leaves an element with the class .thumbImg, initiate function hiding everything again
      $(this).css("opacity", 1).next().hide();
    });
  });
