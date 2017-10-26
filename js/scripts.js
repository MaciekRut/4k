
$(document).ready(function(){ //aminacja na bannerze
    $("h1").animate({'opacity':'1'},1000);
});    
  
$(function () { // zwijanie menu
    $("#toggler").blur(function(event) { 
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) { 
            $("#navbarNav").collapse('hide'); 
            }
    });
});