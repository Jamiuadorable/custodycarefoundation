/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass('fixed-header');
        $('header h1').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('header h1').removeClass('visible-title');
    }
});


$(document).ready(function(){
    $("#myModal").modal('show');
});