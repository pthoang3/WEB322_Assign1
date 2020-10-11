/*Navigation Bar */
const menu = document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar_menu');
menu.addEventListener('click', function() {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
});

/* Promotion Section */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  /*setTimeout(showSlides, 200); */
}


 // get login_table
 var login = document.getElementById('login_table');
  
// get signup_popup_btn close login_table
 var loginbtn = document.getElementById("login_popup_btn");

     // get span close login_table
 var span1 = document.getElementsByClassName("login_close")[0];

 // button -click -> open login_table
 loginbtn.onclick = function() {
     login.style.display = "block";
 }

 //when click outside login_table ->close span
 span1.onclick = function() {
     login.style.display = "none";
 }

// when click outside login_table->close
window.onclick = function(event) {
     if (event.target == login) {
         login.style.display = "none";
     }
 }
//get signup_table
    var signup = document.getElementById('signup_table');
 
    // get signup_popup_btn close signup_table
    var signupbtn = document.getElementById("signup_popup_btn");
 
    // get span close signup_table
    var span2 = document.getElementsByClassName("signup_close")[0];
 
    // button -click -> open signup_table
    signupbtn.onclick = function() {
        signup.style.display = "block";
    }
 
   //when click outside signup_table ->close span
    span2.onclick = function() {
        signup.style.display = "none";
    }
 
    // when click outside signup_table->close
    window.onclick = function(event) {
        if (event.target == signup) {
            signup.style.display = "none";
        }
    }


