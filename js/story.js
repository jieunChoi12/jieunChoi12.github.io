$(function(){
    let li = $('.story_2 ul li');
    li.mouseover(function(){
        $(this).find('circle').stop().animate({strokeDashoffset:0},500);
    });
    li.mouseout(function(){
        $(this).find('circle').stop().animate({strokeDashoffset:1118},500);
    });
});