/** Sticky Navigation */
window.onscroll = function() { myfunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myfunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}