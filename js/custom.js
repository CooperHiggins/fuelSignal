

$(document).ready(function(){       
   var scroll_start = 10;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-default').css('background-color', 'rgba(34,34,34,0.9)' );
          $('.navbar-default').css('padding', '0px');
          $('.navbar-brand').attr('src','images/main-logo-white.png');

       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $('.navbar-default').css('padding', '0px');
          $('.navbar-brand').attr('src','images/main-logo.png');
       }
   });
});

$(window).scroll(function(e){ 
  $el = $('.car'); 
  if ($(this).scrollTop() > 700 && $el.css('position') != 'fixed'){ 
    $('.car').css({'position': 'fixed', 'top': '200px'});
    // $('.car').css({'right': '47%', });

  }
  if ($(this).scrollTop() < 700 && $el.css('position') == 'fixed')
  {
    $('.car').css({'position': 'absolute', 'top': '0px'});
    // $('.car').css({'right': '47%', }); 
  } 
});






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