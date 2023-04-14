$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".header-section").css("background" , "rgba(0,0,0,.3)");
        }
  
        else{
            $(".header-section").css("background" , "#F2F2F2");  	
        }
    })
  })