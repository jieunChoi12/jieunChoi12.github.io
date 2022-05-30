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
    //검색창
    let search = $('.search');
    let search_ct = $('#search');
    let $close = $('#search .close');
    search.click(function(e){
    e.preventDefault();
    search_ct.addClass('active');
    });
    $close.click(function(){
    search_ct.removeClass('active');
    });

    //헤더sticky
    $(window).scroll(function(){
        if($(window).scrollTop() > headerHeight){
            header.addClass('active');
        }else{
            header.removeClass('active');
        }
    });
    
    
    
    
    //푸터
    $('footer .footer_bar').tabs({
        collapsible: true,
        active:false,
        hide:{duration:300},
        show:{duration:300}
    });
});