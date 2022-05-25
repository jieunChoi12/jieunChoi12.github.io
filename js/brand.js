$(function(){

     //탑버튼
     let top = $('.top a');

     $(window).scroll(function(){
         if($(this).scrollTop() > 900){
             top.fadeIn();
         }else{
             top.fadeOut();
         }
     });
     top.click(function(e){
         e.preventDefault();
         $('body,html').animate({scrollTop:0},500);
     });
});