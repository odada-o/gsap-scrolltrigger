$(function () {
  AOS.init({
    duration: 900,
  });

  // $('body .layerPop-overlay').hide();
  // $('body .layerPop-wrap').hide();
  /*
  setTimeout(function() {
    $('body .layerPop-overlay').fadeIn()
    $('body .layerPop-wrap').fadeIn();
  }, 2000);
  */

  $('.quickBtn').on('click', function () {
    $(".quickCont").fadeToggle();
  });
  $('.quickClose').on('click', function () {
    $(".quickCont").fadeOut();
  });
  //main_slider
  $('.main_bg_slider').slick({
    fade: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    asNavFor: '.main_text_slider',
    prevArrow: $('.indicator').find('.prev'),
    nextArrow: $('.indicator').find('.next'),

  });
  $('.main_text_slider').slick({
    fade: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    dots: true,
    appendDots: $('.indicator .dot'),
    arrows: false,
    asNavFor: '.main_bg_slider',
  });

  $('.main_slider').slick('slickPause');
  setTimeout(function () {
    $('.main_slider').slick('slickPlay');
  }, 1000);

  if (typeof $.fn.Slick === 'undefined') {

    $('.main_slider').find('.v1').addClass('on');
    $('.indicator').addClass('on');

    $('.main_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.indicator').removeClass('on');
      $('.main_slider').find('div[class*="v"]').removeClass('on');
      $('.main_slider').find('.v' + (nextSlide + 1)).addClass('on');
    });
    $('.main_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.indicator').addClass('on');
    });
  }

  //슬라이드 재생여부
  $('.status_wrap').find('.status').on('click', function () {
    if ($(this).hasClass('play') == true) {
      $(this).removeClass('play').addClass('stop');
      $('.main_slider').slick('slickPlay');
    } else {
      $(this).removeClass('stop').addClass('play');
      $('.main_slider').slick('slickPause');
    }
  });

  //메인비쥬얼 active
  if (typeof $.fn.Slick === 'undefined') {
    $('.main_slider').find('.v01').addClass('on');
    $('.main_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.main_slider').find('div[class*="v0"]').removeClass('on');
      $('.main_slider').find('.v0' + (nextSlide + 1)).addClass('on');
    });
    $('.main_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {});
  }



});


$(function () {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  $('body').scrollTop(0);
  $(".header #gnb").css("opacity", "0");
  $("body").css("overflow", "hidden");
  $(".main_home .main_bg_slider").css("opacity", "0");
  $(".main_home .text_slider_wrap").css("opacity", "0");
  $(".header-wrap .logo").css("width", "100%");
  $(".header-wrap .logo").css("height", "100vh");


  gsap.fromTo(
    $('.header-wrap .logo'), {
      yPercent: 0,
      opacity: 0,
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.inOut",


      onComplete: function () {
        gsap.fromTo(
          $('.header-wrap .logo'), {
            width: '100%',
            height: '100vh',
            left: 0,
            top: 0,
          }, {
            width: '51px',
            height: '51px',
            delay: 0.5,
            duration: 0.9,
            left: 53,
            top: 26,
          }
        );
        gsap.to(window, 0, {
          scrollTo: 0
        });
        gsap.fromTo(
          $('.header #gnb'), {
            yPercent: 25,
            opacity: 0,

          }, {
            yPercent: 0,
            opacity: 1,
            delay: 0.8,
            duration: 1,
          }
        );

        gsap.fromTo(
          $('.header .sub_menuBtn'), {
            yPercent: 25,
            opacity: 0,

          }, {
            yPercent: 0,
            opacity: 1,
            delay: 0.8,
            duration: 1,
          }
        );

        gsap.fromTo(
          $('.main_home .main_bg_slider'), {
            yPercent: 100,
            opacity: 0,

          }, {
            yPercent: 0,
            opacity: 1,
            delay: 0.5,
            duration: 0.9,
          }
        );

        gsap.fromTo(
          $('.main_home .text_slider_wrap'), {
            opacity: 0,
            yPercent: 100,

          }, {
            opacity: 1,
            yPercent: 0,
            delay: 0.5,
            duration: 0.9,
          }
        );


        gsap.fromTo(
          $('body'), {
            overflow: 'hidden',

          }, {
            overflow: 'visible',
            delay: 0.8,
            duration: 1,
          }
        );
      }
    }
  );

  gsap.to('.orange_bg', {
    duration: 1,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: ".Msection1",
      start: "top top",
      scrub: 1,
      //markers:true,
      end: "bottom bottom",
    }
  });
  let tl_1 = gsap.timeline();
  tl_1.to(".Msection1 .main_bg_slider", {
    scale: 0.9
  }).paused(true);

  ScrollTrigger.create({
    trigger: ".Msection1",
    start: 60,
    end: "bottom",
    //markers: true,
    scrub: 1,
    animation: tl_1
  });

  function onScroll() {

    imgListSectionTop = $('.Msectionnew2').offset().top;
    initMotion_ImgList();
  }

  function initMotion_ImgList() {
    $('.Msectionnew2').each(function () {
      imgListSectionHeight = $('.Msectionnew2').height();

      if (imgListSectionTop < 0 && -imgListSectionTop < imgListSectionHeight / 2) {
        $('.title_wrap', this).css({
          'margin-top': -imgListSectionTop
        });
      }
    });
  }
  let sections = gsap.utils.toArray(".Msectionnew2 .panel");
  gsap.set('.Msectionnew2', {
    height: '200vh'
  })
  gsap.timeline({
      scrollTrigger: {
        trigger: '.transition_section .flex-box',
        start: 'top top',
        end: () => `+=${document.querySelector('.panel').offsetHeight} -120%`,
        pin: '.Msectionnew2',
        pinSpacing: false,
        ease: "none",
        scrub: 2,
      },
    })
    .to(sections, {
      xPercent: -100 * (sections.length - 2)
    })
    .from('.panelsText', {
      autoAlpha: 1
    }, "<")
    .from('.panelsText ', {
      yPercent: -50
    })

  var windowHeight = $(window).height() - 280;
  var imgHeight = 0;
  var imgWidth = 0;

  if (windowHeight >= 700) {
    imgHeight = 700;
    imgWidth = 600;

  } else {
    imgHeight = windowHeight + 140;
    imgWidth = imgHeight * 0.85;
  }

  $(window).resize(function () {
    var windowHeight = $(window).height() - 280;
    if (windowHeight >= 700) {
      imgHeight = 700;
      imgWidth = 600;

    } else {
      imgHeight = windowHeight + 140;
      imgWidth = imgHeight * 0.85;
    }

  });

  $(".Msectionnew2 .heightImg").height(imgHeight);
  $(".Msectionnew2 .heightImg").width(imgWidth);


  ScrollTrigger.create({
    trigger: ".Msection3",
    start: "top 0px",
    end: "bottom 30%",
    pin: true,
    //markers: true,
    scrub: 1,
  });


  gsap.utils.toArray(".list_wrap").forEach((section, i) => {
    let image = section.querySelector("img");
    const heightDiff = image.offsetHeight;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        scrub: true,
        pin: false,
        start: "top center",
        end: "bottom top",
      },
    });
    tl.from(image, {
      yPercent: -25,
      ease: "none",
    }).to(image, {
      yPercent: 25,
      ease: "none",
      // delay: 0.5,
    });
  });
  gsap.to('.Msection4 .black_bg', {
    duration: 1,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: ".Msection5 ",
      //start: "top 75%",
      start: "top 45%",
      scrub: 0.1,
      //markers:true,
      end: "top 100%",

    }
  });

  const Msection4TXT = gsap.timeline({
    scrollTrigger: {
      trigger: ".Msection5",
      //start: "top 75%",
      start: "top 45%",
      scrub: 1,
      //markers:true,
      end: "top 100%",
    }
  })

  Msection4TXT
    .to('.ani__txt__fff', {
      duration: 1,
      color: '#ffffff',
      borderColor: '#ffffff',
      ease: "none"
    }, 0)


  gsap.to('.Msection5 .black_bg', {
    duration: 1,
    autoAlpha: 1,
    scrollTrigger: {
      trigger: ".Msection5 ",
      //start: "top 75%",
      start: "top 45%",
      scrub: 0.1,
      //markers:true,
      end: "top 100%",
    }
  });


  let tl_4 = gsap.timeline();
  tl_4.fromTo(".Msection5 .list_item_top", {
    xPercent: -10
  }, {
    xPercent: 20,
    stagger: .2,
    duration: 5,
    ease: "power2.out"
  });

  ScrollTrigger.create({
    trigger: ".Msection5",
    start: "top 75%",
    end: "bottom bottom",
    //markers: true,
    scrub: 1,
    animation: tl_4
  });

  let tl_5 = gsap.timeline();
  tl_5.fromTo(".Msection5 .list_item_bottom", {
    xPercent: 10
  }, {
    xPercent: -20,
    stagger: .2,
    duration: 5,
    ease: "power2.out"
  });

  ScrollTrigger.create({
    trigger: ".Msection5",
    start: "top 75%",
    end: "bottom bottom",
    //markers: true,
    scrub: 1,
    animation: tl_5
  });

  let tl_6 = gsap.timeline();
  tl_6.fromTo(".Msection7 .video_wrap", {
    width: "47vw"
  }, {
    width: "100vw",
    stagger: .5,
    duration: 15,
    ease: "linear"
  });

  ScrollTrigger.create({
    trigger: ".Msection7",
    start: "top 75%",
    end: "20% top",
    // markers: true,
    scrub: 1,
    animation: tl_6
  });
  var text = gsap.timeline({
    scrollTrigger: {
      trigger: ".index-flow__body",
      start: "top top",
      end: "bottom bottom",
      pin: ".index-flow__side",
    }
  });
  var e = document.querySelectorAll("[data-change-trigger]");
  e.length > 0 && e.forEach((function (e, t) {
    gsap.to(".image0".concat(t + 1), {
      opacity: 1,
      scrollTrigger: {
        trigger: e,
        start: "top center",
        toggleActions: "play none none reverse"
      }
    });
  }));
});

$(document).ready(function () {
  const circle = document.querySelector("#cursor");
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
  });
  $('.cursor_wrap').hover(function () {
    $('#cursor').addClass('on');
  }, function () {
    $('#cursor').removeClass('on');
  });
});

$(document).ready(function () {
  $("body").on("mousewheel", function (e) {
    var wheel = e.originalEvent.wheelDelta;

    if (wheel > 0) {
      //스크롤 올릴때
      $(".header").removeClass("scrollDown");
      $(".header").addClass("scrollUp");
      //$(".Msection3").addClass("fixed");
      $(".topBtn").hide();
    } else {
      //스크롤 내릴때
      $(".header").addClass("scrollDown");
      $(".header").removeClass("scrollUp");
      //$(".Msection3").removeClass("fixed");
      $(".topBtn").show();
    }
  });
  $('.topBtn').on('click', function (e) {
    e.preventDefault();
    $(window).scrollTop(0);
    $(".header").removeClass("scrollDown");
    $(".header").addClass("scrollUp");
  });
});
