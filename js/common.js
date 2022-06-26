$(function(){

    //헤더 서브메뉴
    let header = $('header'),
    menu = header.find('nav .main_menu>li'),
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
    //검색창
    let search = $('.search');
    let search_ct = $('#search');
    let $close = $('#search .close');
    search.click(function(e){
        e.preventDefault();
        search_ct.addClass('active');
        search_ct.find('input').focus();
    });
    $close.click(function(){
        search_ct.removeClass('active');
    });

    //헤더sticky
    $(window).scroll(function(){
        if($(window).scrollTop() > 0){
            header.addClass('active');
        }else{
            header.removeClass('active');
        }
    });
    
    //모바일메뉴
    let mobile_menu = $('header .mobile_menu');
    let mobile_open_menu = $('.mobile_open_menu');
    let mobile_menu_li = $('.mobile_open_menu .main_menu > li');
    let mobile_eng = $('.mobile_open_menu .mobile_etc_menu .eng a');

    mobile_menu.click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        mobile_open_menu.toggleClass('active');
        if(mobile_open_menu.hasClass('active')){
            $('body').addClass('active');
        }
        else{
            $('body').removeClass('active');
        }
    });
    mobile_menu_li.click(function(){
        $(this).siblings().find('ul').slideUp();
        $(this).find('ul').slideToggle();
    });
    mobile_eng.click(function(e){
        e.preventDefault();
        $(this).text('kor');
    });
    
    //푸터
    $('footer .footer_bar').tabs({
        collapsible: true,
        active:false,
        hide:{duration:300},
        show:{duration:300}
    });
});