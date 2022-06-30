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
    $('.history #fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        scrolloverflow:true,
        anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', 'footer'],
        navigation:true,
        navigationTooltips: ['banner', '태동기','럭키','생활건강','footer'],
        showActiveTooltip: true
    });

    //number animation
    let num = $('.section .num');
    

});