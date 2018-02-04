/* pgwslideshow - plugin */
$(document).ready(function() {
    $('.pgwSlideshow').pgwSlideshow();
});

$(document).ready(function(){
   $(".hide_button").click(function(){
       $("nav").fadeToggle("slow") /* Navigation fades away */
       $("footer").fadeToggle("slow") /* footer fades away */
       $(".banner").fadeToggle("slow") /* banner fades away */
   })
});
