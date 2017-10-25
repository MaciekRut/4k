
$(document).ready(function(){ //aminacja na jumbotron
    $("h1>div:nth-child(1)").animate({'opacity':'1'},800, function() {
    	$("h1>div:nth-child(2)").animate({'opacity':'1'},400, function() {
			$("h1>div:nth-child(3)").animate({'opacity':'1'},200);
	    	});    
	    });
});    

$(function () { // zwijanie menu
    $("#toggler").blur(function(event) { 
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) { 
            $("#navbarNav").collapse('hide'); 
            }
    });
});