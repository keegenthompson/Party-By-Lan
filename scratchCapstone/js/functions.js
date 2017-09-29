/* Global Variables */
var formValidity = true;

/* Changing the time interval for the carousel */
$(document).ready(function() {
  $("#myCarousel").carousel({
    interval: 3000
  }); // change image every 3 seconds
});

/* IJPB 9.18.17 - fixed bug by removing broken jQuery code and replacing it with the function below */
/* Have the party name appear when the thumbnail image is hovered over */
function fade(evt) {
  var target = evt.srcElement.id.split(" "); // Get id from whichever thumbImg triggered the event and split it so "pic #" -> "pic", "#"
  var targetDiv = document.getElementById("div " + target[1]); // Get corresponding div containing the party name by the second part of the broken up string with the number and attaching it to a "div " which all elements have
  targetDiv.style.display = "inline"; // show div with party name
} // ./fade()

/* Have the party name disappear when thumbnail image is no longer hovered over */
function fadeOut(evt) {
  var target = evt.srcElement.id.split(" "); // Get id from whichever thumbImg triggered the event and split it so "pic #" -> "pic", "#"
  var targetDiv = document.getElementById("div " + target[1]); // Get corresponding div containing the party name by the second part of the broken up string with the number and attaching it to a "div " which all elements have
  targetDiv.style.display = "none"; // hide div with party name
} // ./fadeOut()

function loginSuccess() {
  var loginElements = document.getElementsByName("loginInfo");
  var loginSuccess = document.getElementById("welcomeUser");
  var navElements = document.getElementsByTagName("form")[0];

  /* Make login elements disappear */
  for (var i = 0; i < loginElements.length; i++) {
    loginElements[i].style.display = "none";
  }

  /* Position nav elements to the right */
  navElements.style.position = "relative";
  navElements.style.left = "75%";
  navElements.style.float = "right";
  /* Display greeting */
  loginSuccess.style.display = "inline-block";
  loginSuccess.innerHTML = "Welcome, user!";

} // ./loginSuccess()

function validateLogin(evt) {
  var errorMsg = document.getElementById("wrongLogin");
  var loginInputs = document.getElementsByClassName("loginInput");

  /* Stops the form from being submitted by default */
  if (evt.preventDefault) { // for modern browsers
    evt.preventDefault();
  } else { // for older browser
    evt.returnValue = false;
  }

  formValidity = true;

  /* Check IF BOXES ARE BLANK */
  for (var i = 0; i < loginInputs.length; i++) {
    if (loginInputs[i].value === "") { // if blank
      loginInputs[i].style.background = "rgb(205, 99, 92)"; // make box background red
      formValidity = false;
    } // ./if statement
  } // ./for loop

  if (formValidity === true) {
    loginSuccess();
  }
  // else { // if input is valid
  //   console.log("in else");
  //   loginSuccess();
  //   formValidity = false;
  // }

  /* Validity test */
  if (formValidity === true) { // form is valid
    errorMsg.innerHTML = ""; // turn off error messages
    errorMsg.style.display = "none"; // remove error div
    //document.getElementsByTagName("form")[0].submit(); // submit
  } else { // form is not valid
    errorMsg.innerHTML = "Please fix the indicated problems and then login again"; // display custom error message
    errorMsg.style.display = "block"; // error message displays
    scroll(0, 0); // scroll screen up so user sees error message
  } // ./else statement
} // ./validateLogin()

function createEventListeners() {
  /* Event Listener for login form */
  var loginForm = document.getElementsByTagName("form")[0];
  if (loginForm.addEventListener) { // For Mozilla
    loginForm.addEventListener("submit", validateLogin, false);
  } else if (loginForm.attachEvent) { // For IE
    loginForm.attachEvent("onsubmit", validateLogin);
  }

  /* Event listeners for the thumbnail image elements */
  var thumbImg = document.getElementsByClassName("thumbImg"); // calling array of the thumbnail images
  var divArray = document.getElementsByClassName("partyName"); // calling array of divs containing party names
  for (var i = 0; i < thumbImg.length; i++) {
    if (thumbImg[i].addEventListener) { // For Mozilla
      thumbImg[i].addEventListener("mouseover", fade, false) // on hover thumbnail image, go to fade()
      thumbImg[i].addEventListener("mouseleave", fadeOut, false) // not on hover thumbnail image, go to fadeOut()

      divArray[i].addEventListener("mouseover", fade, false) // on hover div element, go to fade()
      divArray[i].addEventListener("mouseleave", fadeOut, false) // not on hover div element, go to fadeOut()
    } else if (thumbImg[i].attachEvent) { // For IE
      thumbImg[i].attachEvent("onmouseleave", fade); // on hover thumbnail image, go to fade()
      thumbImg[i].attachEvent("onmouseleave", fadeOut); // not on hover thumbnail image, go to fadeOut()

      divArray[i].attachEvent("onmouseleave", fade); // on hover div element, go to fade()
      divArray[i].attachEvent("onmouseleave", fadeOut); // not on hover div element, go to fadeOut()
    } // ./else if
  } // ./for loop
} // ./createEventListeners()

/* On load, go to createEventListeners() */
if (window.addEventListener) { // For Mozilla
  window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) { // For IE
  window.attachEvent("onload", createEventListeners);
}
