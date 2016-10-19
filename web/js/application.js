//--------------------------------
// Main Javascript File - put your JS in here
//--------------------------------
(function($){


  function goToByScroll(id){
         $('html,body').animate({
             scrollTop: $(id).offset().top
           }, 300, 'swing');
   }
   
   //Scroll when contact is clicked
   $('a[href$="#contact-form"]').click(function() {
     goToByScroll("#contact-form");
     return false;
   });
   
  
  //Load Typekit.
  $(function() {
    try {
      Typekit.load();
    }
    catch(e) {}
  });
  
  //Replace ampersands in headers
  $(":header:contains('&')").each(function(){
    $(this).html($(this).html().replace(/&amp;/, "<span class='ampersand'>&amp;</span>"));
  });
  
  //Deal with Form
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    
    var name = $("input#name").val();
    var email = $("input#email").val(); 
    var message = $("textarea#message").val();  
    
    if (name == "") {$("input#name").focus(); return false;}
    if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {$("input#email").focus(); return false;}  
    if (message == "") {$("textarea#message").focus(); return false;}  
    
    
    $("#contact-overlay").fadeToggle('slow');
    //$("#contact-form :input").attr('disabled', true);
    
    var dataString = 'name='+ name + '&email=' + email + '&message=' + message;  
    $.ajax({  
      type: "POST",  
      url: "/bin/email.php",  
      data: dataString,  
      success: function(data) {
        $("#contact-form :text, #contact-form textarea").val("");
        $("#contact-overlay").css("background-image", "none");
        $("#contact-overlay").html(data).delay(1500).fadeToggle('slow');
      },
      error: function(jqXHR, textStatus, e) {
        $("#contact-overlay").css("background-image", "none");
        $("#contact-overlay").html('Ooops, something went Wrong!').delay(1500).fadeToggle('slow');
        alert(textStatus + "\n\n" + e + "\n\n" + jqXHR);
      }
    });
    $("#contact-overlay").html('Sending message...');
  });
})(this.jQuery);
