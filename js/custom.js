$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-default').css('background-color', 'rgba(34,34,34,0.9)' );
          $('.navbar-default').css('padding', '0px');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
          $('.navbar-default').css('padding', '0px');
       }
   });
});

$(document).ready(function(){       
   var scroll_start = 50;
   var startchange = $('.car');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.car').css('position', 'fixed' );
          
       } else {
          $('.car').css('position', 'relative' );
          $('.car').css( );
        }
   });
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