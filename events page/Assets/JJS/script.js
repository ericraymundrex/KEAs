
// OWL CAROUSEL JS
$(document).ready(function() {
    $("#research-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        autoPlay:true
    });
});

$(document).ready(function() {
    $("#date-slider").owlCarousel({
        items : 5,
        itemsDesktop:[1199,4],
        itemsDesktopSmall:[980,3],
        itemsMobile : [600,1],
        autoPlay:true
    });
});



// ANIMATE ON SCROLL
AOS.init({
    delay: 0,
    duration: 1000, 
});




// ANIMATED NUMBER COUNTER
$(function () {
    // CONFIG
    let visibilityIds = ['#counters_1', '#counters_2', '#counters_3']; //must be an array, could have only one element
    let counterClass = '.counter';
    let defaultSpeed = 3000;
    $(window).on('scroll', function () {
        getVisibilityStatus();
    });
    getVisibilityStatus();
    function getVisibilityStatus() {
        elValFromTop = [];
        var windowHeight = $(window).height(),
            windowScrollValFromTop = $(this).scrollTop();
        visibilityIds.forEach(function (item, index) {
            try {
                elValFromTop[index] = Math.ceil($(item).offset().top);
            } catch (err) {
                return;
            }
            if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
                counter_init(item);
            }
        });
    }
    function counter_init(groupId) {
        let num, speed, direction, index = 0;
        $(counterClass).each(function () {
            num = $(this).attr('data-TargetNum');
            speed = $(this).attr('data-Speed');
            direction = $(this).attr('data-Direction');
            easing = $(this).attr('data-Easing');
            if (speed == undefined) speed = defaultSpeed;
            $(this).addClass('c_' + index); //add a class to recognize each counter
            doCount(num, index, speed, groupId, direction, easing);
            index++;
        });
    }
    function doCount(num, index, speed, groupClass, direction, easing) {
        let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
        if(easing == undefined) easing = "swing";
        $(className).animate({
            num
        }, {
            duration: +speed,
            easing: easing,
            step: function (now) {
                if (direction == 'reverse') {
                    $(this).text(num - Math.floor(now));
                } else {
                    $(this).text(Math.floor(now));
                }
            },
            complete: doCount
        });
    }
})


