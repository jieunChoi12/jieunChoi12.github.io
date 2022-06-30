$(function(){
    //fullpage
    $('.history #fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        scrolloverflow:true,
        anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', 'footer'],
        navigation:true,
        navigationTooltips: ['', '태동기','럭키','생활건강',''],
        showActiveTooltip: true,
        afterLoad: function(origin, destination, direction, trigger){
            // if(origin.index == 2){
                let num = $('.section.active .num'),
                    targetNum = num.attr('data-num'),
                    originNum = num.text();

                $({rate:originNum}).animate({rate:targetNum},{
                    duration:3000,
                    progress:function(){
                        var now = Math.floor(this.rate);
                        num.text(now);
                    }
                });

            // }
        }
    });

});