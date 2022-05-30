$(function(){


    //메인슬라이드
    let page_move = $('.bx-controls .bx-pager a');
    let slider = $('.main_slide .slider').bxSlider({
        mode:'fade',
        controls:false,
        auto:true,
        onSliderLoad:function(currentIndex){
            $('.main_slide .pager_num').text('0'+(currentIndex+1));
            if(currentIndex == page_move.attr('data-slide-index')){
                page_move.addClass('active');
            }
            $('.main_slide .slider li').eq(currentIndex).find('h2').addClass('animate__animated animate__fadeInUp');
        },
        onSlideAfter:function($slideElement){
            let idx = $slideElement.index();
            $('.main_slide .pager_num').text('0'+(idx+1));
            if(idx == page_move.attr('data-slide-index')){
                page_move.addClass('active');
            }
            $slideElement.find('h2').addClass('animate__animated animate__fadeInUp');
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
    let brand_slide1 = $('.best_brand #content1 ul').bxSlider({
        minSlides:1,
        maxSlides:5,
        moveSlides:1,
        slideWidth:196,
        slideMargin:24,
        auto:true,
        speed:1000,
        pause:2000,
        pager:false
    });
    let brand_slide2 = $('.best_brand #content2 ul').bxSlider({
        minSlides:1,
        maxSlides:5,
        moveSlides:1,
        slideWidth:196,
        slideMargin:24,
        auto:true,
        speed:1000,
        pause:2000,
        pager:false
    });
    let brand_slide3 = $('.best_brand #content3 ul').bxSlider({
        minSlides:1,
        maxSlides:5,
        moveSlides:1,
        slideWidth:196,
        slideMargin:24,
        auto:true,
        speed:1000,
        pause:2000,
        pager:false
    });
    let func = function(){
        $('.best_brand .tab_content .bx-prev').html('<span class="material-symbols-outlined">chevron_left</span>');
        $('.best_brand .tab_content .bx-next').html('<span class="material-symbols-outlined">chevron_right</span>');
    }

    $('.best_brand').tabs();
    func();

    $('.best_brand .tab li').click(function(){
        $('.best_brand').tabs();
    });
    $('.best_brand .tab li:first-child').click(function(){
        brand_slide1.reloadSlider();
        func();
    });
    $('.best_brand .tab li:nth-child(2)').click(function(){
        brand_slide2.reloadSlider();
        func();
    });
    $('.best_brand .tab li:last-child').click(function(){
        brand_slide3.reloadSlider();
        func();
    });

    //광고

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
    

    AOS.init({
        offset:100
    });

    // brand_desc 스크롤효과
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "100%"
        }
    });

    // get all slides
    var slides = document.querySelectorAll("div.panel");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }

    //brand_desc slide
    let bd_slide = $('.brand_desc .image_wrap').bxSlider({
        slideWidth:500,
        pager:false
    });
    $('.brand_desc .bx-controls .bx-prev').html('<span class="material-symbols-outlined">arrow_circle_left</span>');
    $('.brand_desc .bx-controls .bx-next').html('<span class="material-symbols-outlined">arrow_circle_right</span>');



});