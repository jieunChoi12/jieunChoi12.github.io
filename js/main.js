$(function(){
    //헤더 서브메뉴
    let header = $('header'),
        menu = header.find('nav>ul>li'),
        link = menu.find('a'),
        target = $('.target'),
        headerHeight = header.outerHeight(),
        newHeight = 0,
        subMenu = menu.find('ul');

    //서브메뉴높이구하기
    subMenu.each(function(){
        if($(this).outerHeight() > newHeight){
            newHeight = headerHeight + $(this).outerHeight();
        }
    });
    menu.hover(
        function(){
            header.stop().animate({height:newHeight});
        },
        function(){
            header.stop().animate({height:headerHeight});
        }
    )
    //서브바
    menu.each(function(){
        $(this).mouseover(function(){
            let width = $(this).outerWidth();
            let top = $(this).outerHeight();
            let left = $(this).offset().left;
            
            target.css({
                width:`${width}px`,
                top:`${top - 4}px`,
                left:`${left}px`,
                borderColor:'#c40452'
            });
        });
        $(this).mouseout(function(){
            target.css({borderColor:'transparent'});
        });
    });
    //eng
    let eng = $('.eng');
    eng.mouseover(function(){
        header.css({overflow:'visible'});
        subMenu.css({display:'none'});
    });
    eng.mouseout(function(){
        header.css({overflow:'hidden'});
        subMenu.css({display:'flex'});
    });


    //메인슬라이드
    let slider = $('.main_slide .slider').bxSlider({
        mode:'fade',
        controls:false,
        auto:true,
        onSliderLoad:function(currentIndex){
            $('.main_slide .pager_num').text('0'+(currentIndex+1));
        },
        onSlideAfter:function($slideElement){
            console.log($slideElement.index());
            $('.main_slide .pager_num').text('0'+($slideElement.index()+1));
        }
    });
    $('.main_slide .control .prev').click(function(e){
        e.preventDefault();
        slider.goToPrevSlide();
    });
    $('.main_slide .control .next').click(function(e){
        e.preventDefault();
        slider.goToNextSlide();
    });
    //페이저
    
    // pagerNum.text(slider.index());
    //autoplay
    let indicator = $('.main_slide .indicator');
    let start = $('.main_slide .indicator .play');
    let stop = $('.main_slide .indicator .stop');
    start.click(function(){
        indicator.removeClass('active');
        slider.startAuto();
    });
    stop.click(function(){
        indicator.addClass('active');
        slider.stopAuto();
    });


    //Best brand 슬라이드
    let brand_slide = $('.best_brand .tab_content ul').bxSlider({
        minSlides:1,
        maxSlides:5,
        moveSlides:1,
        slideWidth:196,
        slideMargin:24,
        auto:true,
        speed:2000,
        pager:false
    });
    $('.best_brand .tab_content .bx-prev').html('<span class="material-symbols-outlined">chevron_left</span>');
    $('.best_brand .tab_content .bx-next').html('<span class="material-symbols-outlined">chevron_right</span>');

    $('.best_brand').tabs();


    


















});