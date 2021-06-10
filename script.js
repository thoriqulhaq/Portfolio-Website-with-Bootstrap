/*
    Name : Thoriqulhaq Jibril Al Qudsy
    Metric : A19EC0292
    Assignment 3: HTML + CSS + JS + Bootstrap
*/

/* Message Form */
function myFunction() {
    document.getElementById("messageform").submit();
}

/* Back to Top Button */
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
