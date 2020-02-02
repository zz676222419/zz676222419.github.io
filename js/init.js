$(function () {
    window.onload = function () {
        $("#preloader").css({height:window.innerHeight});
        loading();
        WindowScroll();
        animate();
    }
    $(window).scroll(function() {
        WindowScroll();
        $(".m-title").each(function () {
            if(IsShow($(this))){
                $(this).addClass("animated rotateInDownLeft");
                $(".m-school-wrapper").addClass("animated fadeInDown");
            }
        });
        $(".s-item").each(function () {
            if (IsShow($(this))) $(".s-item .s-item-bg .s-item-bar-wrap").addClass("open");
        });
        if(window.pageYOffset < 500){
            $('.nav-top').eq(0).removeClass("opened");
        }else if (window.pageYOffset >= 500){
            $('.nav-top').eq(0).addClass("opened");
        }
    });
})

function loading() {
    $(function () {
        let timer = setTimeout(function () {
            $('#preloader').fadeOut(1000);
            $("body").css({overflow:"auto"})
            clearTimeout(timer);
        },2000);
    })
}
function WindowScroll() {
    if ($("#nav").offset().top > 50) {
        $(".navbar-fixed-top").removeClass("navbar-transparent");
        $(".navbar-fixed-top").addClass("navbar-default");
    } else {
        $(".navbar-fixed-top").addClass("navbar-transparent");
        $(".navbar-fixed-top").removeClass("navbar-default");
    }
}

function animate(){
    // header中字体
    animateHeader();
    animateDistance();
    windowScroll();
    animate_text();
}

function animateHeader() {
    let timer = setTimeout(function () {
        if (window.pageYOffset < $(".h-header").eq(0).offset().top - 50){
            $(".h-header").eq(0).addClass("animated fadeInLeft");
            clearTimeout(timer);
        }
    },2001);
}

function animateDistance() {
    $(".s-item").each(function() {
        if(IsShow($(this))) $(".s-item .s-item-bg .s-item-bar-wrap").addClass("open");
    })
    $(".m-title").each(function() {
        if(IsShow($(this))){
            $(this).addClass("animated rotateInDownLeft");
            $(".m-school-wrapper").addClass("animated fadeInDown");
        }
    })
}

function windowScroll() {
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
    });
}
function animate_text(){
    "use strict";
    var animateSpan= $('.h-text-change').eq(0);
    var animateText= $('.m-animate-text').eq(0);
    animateSpan.typed({
        strings: ["Student", "Web Developer"],
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
    animateText.typed({
        strings: ["Student", "Web Developer"],
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
}
function IsShow(ele) {
    var a = $(ele),
        i = $(window),
        s = i.scrollTop(),
        r = s + i.height(),
        n = a.offset().top,
        o = n + a.height();
    return r > o - 45;
}