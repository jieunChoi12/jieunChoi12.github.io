$(function(){

  
    //호버써클
    let li = $('.story_2 ul li');
    li.mouseover(function(){
        $(this).find('circle').stop().animate({strokeDashoffset:0},600);
    });
    li.mouseout(function(){
        $(this).find('circle').stop().animate({strokeDashoffset:1118},600);
    });

    //풀페이지
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        scrolloverflow:true,
        navigation:true,
        anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', 'footer']
    });


});