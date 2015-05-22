$(document).ready(function(){       
   var scroll_start = 10;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-default').css('background-color', 'rgba(34,34,34,0.9)' );
          
          $('.navbar-default .navbar-nav > li > a:hover').css('color', 'blue');
          $('.navbar-default').css('padding', '0px');
          $('.navbar-brand').attr('src','images/main-logo-white.png');
          $('.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:hover').css('color','#337ab7');
          // $('.navbar-default .navbar-nav > li > a.home').css('color', 'rgb(255, 128, 0)');
          
           $('.navbar-default .navbar-nav > li > a').css('color', 'rgb(255, 128, 0)');

          

       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $('.navbar-default').css('padding', '0px');
          $('.navbar-brand').attr('src','images/main-logo.png');
         
          
          $('.navbar-default .navbar-nav > li > a').css('color', 'color', '#113FAC');
       }
   });
});

$(window).scroll(function(e){ 
  $el = $('.car'); 
  if ($(this).scrollTop() > 600 && $el.css('position') != 'fixed'){ 
    $('.car').css({'position': 'fixed', 'top': '110px'});
    // $('.car').css({'right': '47%', });

  }
  if ($(this).scrollTop() < 750 && $el.css('position') == 'fixed')
  {
    $('.car').css({'position': 'absolute', 'top': '0px'});
    // $('.car').css({'right': '47%', }); 
  } 
});

  //<![CDATA[
    $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
    })
  //]]>

jQuery(document).ready(function() {
    $('.story')                            // Filter: .stories
        .find('.news')                     // Filter: .stories .news
            .hide()                        // Hide all
            .end()                         // End current filter
        .find('.title')                    // Filter: .stories .title
            .click( function(){            // Set the onclick action
                $(this).siblings('.news')  // Filter: .stories .news (sibling of .title)
                .slideToggle();            // Toggle visibility
            });
});