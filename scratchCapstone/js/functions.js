// Changing the time interval for the carousel
$(document).ready(function(){
    $("#myCarousel").carousel({interval: 3000});
});

function fade(evt) {
  var target = evt.srcElement.id.split(" ");
  var targetDiv = document.getElementById("div " + target[1]);
  targetDiv.style.display = "inline";
}

function fadeOut(evt) {
  var target = evt.srcElement.id.split(" ");
  var targetDiv = document.getElementById("div " + target[1]);
  targetDiv.style.display = "none";
}

//fade thumbnail images and display partyName overlay
var thumbImg = document.getElementsByClassName("thumbImg");
var divArray = document.getElementsByClassName("partyName");
for (var i = 0; i < thumbImg.length; i++) {
  if(thumbImg[i].addEventListener) {
    thumbImg[i].addEventListener("mouseover", fade, false)
    thumbImg[i].addEventListener("mouseleave", fadeOut, false)
    divArray[i].addEventListener("mouseover", fade, false)
    divArray[i].addEventListener("mouseleave", fadeOut, false)
  }
  else if (thumbImg[i].attachEvent) {
    thumbImg[i].attachEvent("onmouseleave", fade);
    thumbImg[i].attachEvent("onmouseleave", fadeOut);
    divArray[i].attachEvent("onmouseleave", fade);
    divArray[i].attachEvent("onmouseleave", fadeOut);
  }
}



  // $(document).ready(function() {
  //   $(".thumbImg").on("mouseenter", function() {  // Initiate a function when the mouse enters an element with the class thumbImg
  //     $(this).css("opacity", 0.3).next().show().css("color", "black");  // Fade out the img and show the partyName
  //   });
  //   $(".thumbImg").on("mouseout", function() {  // Once the mouse leaves an element with the class .thumbImg, initiate function hiding everything again
  //     $(this).css("opacity", 1).next().hide();
  //   });
  // });
