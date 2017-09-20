/* Changing the time interval for the carousel */
$(document).ready(function(){
    $("#myCarousel").carousel({interval: 3000}); // change image every 3 seconds
});

/* IJPB 9.18.17 - fixed bug by removing broken jQuery code and replacing it with the function below */
/* Have the party name appear when the thumbnail image is hovered over */
function fade(evt) {
  var target = evt.srcElement.id.split(" "); // Get id from whichever thumbImg triggered the event and split it so "pic #" -> "pic", "#"
  var targetDiv = document.getElementById("div " + target[1]); // Get corresponding div containing the party name by the second part of the broken up string with the number and attaching it to a "div " which all elements have
  targetDiv.style.display = "inline"; // show div with party name
}

/* Have the party name disappear when thumbnail image is no longer hovered over */
function fadeOut(evt) {
  var target = evt.srcElement.id.split(" "); // Get id from whichever thumbImg triggered the event and split it so "pic #" -> "pic", "#"
  var targetDiv = document.getElementById("div " + target[1]); // Get corresponding div containing the party name by the second part of the broken up string with the number and attaching it to a "div " which all elements have
  targetDiv.style.display = "none"; // hide div with party name
}

/* Event listeners for the thumbnail image elements */
var thumbImg = document.getElementsByClassName("thumbImg"); // calling array of the thumbnail images
var divArray = document.getElementsByClassName("partyName"); // calling array of divs containing party names
for (var i = 0; i < thumbImg.length; i++) {
  if(thumbImg[i].addEventListener) { // For Mozilla
    thumbImg[i].addEventListener("mouseover", fade, false) // on hover thumbnail image, go to fade()
    thumbImg[i].addEventListener("mouseleave", fadeOut, false) // not on hover thumbnail image, go to fadeOut()

    divArray[i].addEventListener("mouseover", fade, false)  // on hover div element, go to fade()
    divArray[i].addEventListener("mouseleave", fadeOut, false) // not on hover div element, go to fadeOut()
  }
  else if (thumbImg[i].attachEvent) { // For IE
    thumbImg[i].attachEvent("onmouseleave", fade);  // on hover thumbnail image, go to fade()
    thumbImg[i].attachEvent("onmouseleave", fadeOut); // not on hover thumbnail image, go to fadeOut()

    divArray[i].attachEvent("onmouseleave", fade);  // on hover div element, go to fade()
    divArray[i].attachEvent("onmouseleave", fadeOut); // not on hover div element, go to fadeOut()
  } // ./else if
} // ./for loop
