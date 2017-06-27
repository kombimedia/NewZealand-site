/* Form Validation
------------------------------------------------------ */
// Form submit buttons - check input validation
document.getElementById('newsletter-button').addEventListener("click", nlFormValidate);
// Stop event listener from running on pages where there is no contact form
var contactButton = document.getElementById('contact-button');
  if (contactButton !== null) {
    contactButton.addEventListener("click", contactFormValidate);
  }

// Variables for input fields + error message div
var nlName, nlEmail, conName, conEmail, conPhone, conMessage, firstName;
var nlErrorMessage = document.getElementById("nl-error-message");
var conErrorMessage = document.getElementById("contact-error-message");

// Newsletter form validation
function nlFormValidate() {
  nlName = document.getElementById('input-name');
  nlEmail = document.getElementById('input-email');
    var validName = validateName(nlName.value, nlErrorMessage);
    var validEmail = validateEmail(nlEmail.value, nlErrorMessage);
      if (validName) {
        nlErrorMessage.innerHTML = validName;
        return;
      }
      if (validEmail) {
        nlErrorMessage.innerHTML = validEmail;
        return;
      }
      // Clear input fields
      nlName.value = "";
      nlEmail.value = "";
      // Output success message and change text colour
      nlErrorMessage.style.color = '#35c625';
      nlErrorMessage.innerHTML = 'Thank you for signing up to our newsletter ' + firstName + '!';
}

// Contact form validation
function contactFormValidate() {
  conName = document.getElementById('form-name');
  conEmail = document.getElementById('form-email');
  conPhone = document.getElementById('form-phone');
  conMessage = document.getElementById('form-message');
  var validName = validateName(conName.value, conErrorMessage);
  var validEmail = validateEmail(conEmail.value, conErrorMessage);
  var validPhone = validatePhone(conPhone.value, conErrorMessage);
  var validMessage = validateMessage(conMessage.value, conErrorMessage);
    if (validName) {
      conErrorMessage.innerHTML = validName;
      return;
    }
    if (validEmail) {
      conErrorMessage.innerHTML = validEmail;
      return;
    }
    if (validPhone) {
      conErrorMessage.innerHTML = validPhone;
      return;
    }
    if (validMessage) {
      conErrorMessage.innerHTML = validMessage;
      return;
    }
    // Clear form input fields
    conName.value = "";
    conEmail.value = "";
    conPhone.value = "";
    conMessage.value = "";
    // Output success message and change text colour
    conErrorMessage.style.color = '#35c625';
    conErrorMessage.innerHTML = 'Thank you for contacting us ' + firstName + '! We will come back to you ASAP.';
}

// Validate name - Function
function validateName(name, message) {
  var hasSpace = name.indexOf(" ");
    if (name === ""  || hasSpace < 0) {
      return "Hmmm.. Did you enter your full name correctly?";
    }
    var nameArray = name.split(" ");
    firstName = nameArray[0];
    var surname = nameArray[1];

    if (firstName.length < 2 || surname.length < 2){
      return "Oops! Is '" + name + "'" + " really your full name?";
    }
    return false;
  }

// Validate email function
function validateEmail(email, message, clear) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  var secondAtPos = email.lastIndexOf("@") !== atPos;
    if (email === "") {
      return "Hmmm.. You haven't entered an email address!";
    } if (atPos < 0) {
      return "Oops!" + " '" + email + "' " + "is missing an '@'.";;
    } if (secondAtPos || dotPos < atPos +2 || dotPos +2 >= email.length || email.length <= 8) {
        return "Oh no! '" + email + "' " + "isn't a valid email address. Please try again.";
    }
    return false;
  }

// Validate phone number function
function validatePhone(phone, message){
  if (phone === "") {
    return "Hmmm.. Please enter your phone number.";
  } if (isNaN(phone) || phone.indexOf(" ") != -1) {
      return "Oops! '" + phone + "' - " + "Please enter numbers only with, no spaces.";
 } if (phone.length > 13 || phone.length < 9) {
      return "Uh oh... A phone number must have at least 9 numbers and no more that 13.";
 } if (phone.charAt(0) === "+"){
      return "For international numbers please use '00' then your country code.";
 } if (phone.charAt(0) != "0"){
      return "Ahhh... You need your area code or mobile prefix, starting with '0'.";
  }
  return false;
}

// Validate message box function
function validateMessage(text, message){
  if (text === "") {
    return "I think you forgot your message...";
  } if (text.length > 500) {
      return "Wow! That's a lot of words! Sorry, 500 characters only please.";
  }
   return false;
}

/* Back to Top Button
------------------------------------------------------ */
$(document).ready(function() {
    // Show or hide the footer button on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
      } else {
        $('.go-top').fadeOut(200);
      }
    });

    // Smooth scroll to top
    $('.go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800);
    })
  });

/* Hide section (image) heading on hover
------------------------------------------------------ */
$(".container-image").hover(function() {
    $(".section-heading", this).fadeOut(200);
} , function() {
        $(".section-heading", this).fadeIn(350, function() {
        });
    });

/* Populate collapse div - section (image) content
------------------------------------------------------ */
// Collapse divs 1 - 4; on attractions, events and history pages
// loop through buttons
var buttonImage1 = document.querySelectorAll('.button-image1');
  for (var i = 0; i < buttonImage1.length; i++) {
    buttonImage1[i].addEventListener("click", runCopyDiv1);
  }

// Run div copy function
function runCopyDiv1(){
  fromDiv1 = document.getElementById('from-div1');
  collapse1 = document.getElementById('collapse-div1');
  fromDiv2 = document.getElementById('from-div2');
  collapse2 = document.getElementById('collapse-div2');
  fromDiv3 = document.getElementById('from-div3');
  collapse3 = document.getElementById('collapse-div3');
  fromDiv4 = document.getElementById('from-div4');
  collapse4 = document.getElementById('collapse-div4');
    copyDivCollapse(fromDiv1, collapse1);
    copyDivCollapse(fromDiv2, collapse2);
    copyDivCollapse(fromDiv3, collapse3);
    copyDivCollapse(fromDiv4, collapse4);
}

// Collapse divs 5 - 8; on attractions and events pages only
// loop through buttons
var buttonImage2 = document.querySelectorAll('.button-image2');
  for (var i = 0; i < buttonImage2.length; i++) {
    setEventListen(buttonImage2[i]);
  }

// Add event listener if button exists on page
function setEventListen(button){
    if (button !== null) {
        button.addEventListener("click", runCopyDiv2);
    }
}

// Run div copy function
function runCopyDiv2(){
  var fromDiv5 = document.getElementById('from-div5');
  var collapse5 = document.getElementById('collapse-div5');
  var fromDiv6 = document.getElementById('from-div6');
  var collapse6 = document.getElementById('collapse-div6');
  var fromDiv7 = document.getElementById('from-div7');
  var collapse7 = document.getElementById('collapse-div7');
  var fromDiv8 = document.getElementById('from-div8');
  var collapse8 = document.getElementById('collapse-div8');
    copyDivCollapse(fromDiv5, collapse5);
    copyDivCollapse(fromDiv6, collapse6);
    copyDivCollapse(fromDiv7, collapse7);
    copyDivCollapse(fromDiv8, collapse8);
}

// Copy to collapse div function
function copyDivCollapse(div, collapse){
  collapse.innerHTML = div.innerHTML;
}

/* Close collapse div on click / tap
------------------------------------------------------ */
// For desktop - click
$(document).on('click',function(){
  $('.collapse').collapse('hide');
});

// For mobile - tap
$(document).on('touchstart', function () {
  $(this).data('moved', '0');
  })
    .on('touchmove', function () {
        $(this).data('moved', '1');
    })
      .on('touchend', function () {
          if($(this).data('moved') == 0){
              $('.collapse').collapse('hide');
          }
});
