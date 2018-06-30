// Javascript used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById('navDemo'); if
    (x.className.indexOf('w3-show') == -1) {
        x.className += ' w3-show';
    } else {
        x.className = x.className.replace(' w3-show', '');
    }
}
// When the user scrolls the page, execute stickyBar 
window.onscroll = function () { stickyBar() };
// Get the navbar
var stickyNav = document.getElementById('stickyNav');
// Get the offset position of the navbar
var sticky = stickyNav.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove 'sticky' when you leave the scroll position
function stickyBar() {
    if (window.pageYOffset >= sticky) {
        stickyNav.classList.add('sticky')
    } else {
        stickyNav.classList.remove('sticky');
    }
}

//Javascript used to have manual slideshow with bottons
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block';
}

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}
