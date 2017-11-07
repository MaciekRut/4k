
//pojawianie się tekstów na bannerze

$(document).ready(function(){ 
    $("h1 div:nth-child(1)").animate({'opacity':'1'},1000, function() {
    	$("h1 div:nth-child(2)").animate({'opacity':'1'},500, function() {
			$("h1 div:nth-child(3)").animate({'opacity':'1'},300, function() {
				$("h1 div:nth-child(4)").animate({'opacity':'1'},300 );
				});
	    	});    
	    });
});  

//zwijanie menu

$(function () { 
    $("#toggler").blur(function(event) { 
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) { 
            $("#navbarNav").collapse('hide'); 
            }
    });
});

//scrollowanie z "a" do target element

$(document).ready(function(){ 
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//pojawianie się obiektów

$(document).ready(function() { 
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.showme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

//pojawianie się powrotu do menu po srollowaniu strony i kliknięciu w dowolny link, 
//bo on scrolluje stronę

$(document).scroll( function() { 
  $("#link-to-menu").show();
  });

//hover h2 na img

var h2s = document.getElementsByTagName("h2");
  for (i=0; i<h2s.length; i++) {
    h2s[i].onmouseover = focus(h2s[i]);
    h2s[i].onmouseleave = defocus(h2s[i]);

  }
function focus(element) {
  return function() {
  element.style.background = "rgba(179, 62, 218, 0.56)";
  }
}
function defocus(element) {
  return function() {
  element.style.background = "none";
  }
}

//cookies

function Close() {
  if (!getCookie("cookie_st")) { //jesli nie ma cookie o takiej nazwie
  setCookie('cookie_st',true,365); //wywoływanie funkcji setCookie z przypisan¹ samemu nazw¹ i dowoln¹ wartoœci¹ i wygaœnieciêm po x dniach
  document.getElementById("popup").style.display="none" } 
  
}

function showPopup() {
  if (!getCookie("cookie_st")) //jesli nie ma cookie o takiej nazwie
  document.getElementById("popup").style.display="block"; //poka¿ popup
  
}
  
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


