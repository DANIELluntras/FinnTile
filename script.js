// Import stylesheets
import './input.css';
const paragaf = document.getElementById("id");
paragaf.style.color ="red";
// paragaf.style.position= "absolute";
paragaf.style.padding= "15px";
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}