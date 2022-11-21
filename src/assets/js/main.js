!(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 20;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('fa-bars fa-times');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first, .mobile-nav ul:first li:first").addClass('active');
            }
        });
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars" aria-hidden="true"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('fa-bars fa-times');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('fa-bars fa-times');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $('#topbar').addClass('topbar-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
            $('#topbar').removeClass('topbar-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
    }

    function owlHero() {
        $(".carousel-hero").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            transitionStyle: "fade",
            items: 1,
            nav: false,
            loop: !0,
            dots: !0
        });
    }

    function owlImages() {
        $("#owl-images").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            transitionStyle: "fade",
            items: 1,
            nav: false,
            loop: !0,
            dots: !0
        });
    }

    function owlCampanha() {
        $("#owl-campanha").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            items: 1,
            nav: true,
            loop: !0,
            dots: false
        });
    }

    // carousel
    function owlCursos() {
        $("#owl-cursos").owlCarousel({
            // loop: !0,
            // nav: true,
            // dots: !1,
            // loop: true,
            // margin: 10,
            nav: true,
            margin: 15,
            responsive: {
                0: { items: 1.15 },
                600: { items: 1.75 },
                768: { items: 2 },
                900: { items: 2.5 },
                1024: { items: 3 },
                1100: { items: 3 },
                1200: { items: 3.15 },
                1350: { items: 3.25 },
                1500: { items: 3 },
            },
        });
    }

    function owlAssinaturas() {
        $("#owl-assinaturas").owlCarousel({
            // loop: !0,
            // nav: true,
            // dots: !1,
            // loop: true,
            // margin: 10,
            nav: true,
            margin: 15,
            responsive: {
                0: { items: 1.15 },
                600: { items: 1.75 },
                768: { items: 2 },
                900: { items: 2.5 },
                1024: { items: 3 },
                1100: { items: 3 },
                1200: { items: 3.15 },
                1350: { items: 3.25 },
                1500: { items: 3 },
            },
        });
    }



    function owlProdutos() {
        $(".carousel-produtos").owlCarousel({
            loop: !0,
            nav: false,
            dots: !1,
            responsive: {
                0: { items: 1.15 },
                425: { items: 1.15 },
                600: { items: 1.35 },
                768: { items: 2.15 },
                900: { items: 2.5 },
                1024: {
                    items: 3,
                    loop: !1
                },
            },
        });
    }



    function owlPlanos() {
        $(".carousel-planos").owlCarousel({
            loop: !0,
            nav: false,
            dots: !1,
            responsive: {
                0: { items: 1.15 },
                425: { items: 1.15 },
                600: { items: 1.35 },
                768: { items: 2.15 },
                900: { items: 3.1 },
                1024: {
                    items: 4,
                    loop: !1
                },
            },
        });
    }

    // carousel
    function owlDepoimentos() {
        $("#owl-depoimentos").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            transitionStyle: "fade",
            items: 1,
            nav: true,
            loop: false,
            dots: false,
            responsive: {
                0: {
                    items: 1.15,
                    margin: 15
                },
                425: {
                    items: 1.15,
                    margin: 15
                },
                577: {
                    items: 1,
                    margin: 0
                },
            },
        });
    }

    // modal video
    function modalVideo() {

        // Gets the video src from the data-src on each button
        var $videoSrc;
        $('.video-btn').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        // when the modal is opened autoplay it  
        $('#modalYoutube').on('shown.bs.modal', function (e) {
            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#attrVideo").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        // stop playing the youtube video when I close the modal
        $('#modalYoutube').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#attrVideo").attr('src', $videoSrc);
        })
    }

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    $(window).on('load', function () {
        aos_init();
        owlCampanha();
        owlImages();
        owlAssinaturas();
        owlCursos();
        owlPlanos();
        owlProdutos();
        owlDepoimentos();

        modalVideo();

        $('.select2-cursos').select2({
            placeholder: 'Escolha uma área'
        });

        $('#btn-cookie').on('click', function (e) {
            $('#cookie-information').hide();
        });

        // $('.input-range').rangeslider();
        $(function () {
            $('input[type="range"]').rangeslider({
                polyfill: false,
                onInit: function () {
                    $('.output').text('R$' + $('input[type="range"]').val() + ',00');
                },
                onSlide: function (position, value) {
                    //console.log('onSlide');
                    //console.log('position: ' + position, 'value: ' + value);
                    $('.output').text('R$' + value + ',00');
                },
                onSlideEnd: function (position, value) {
                    //console.log('onSlideEnd');
                    //console.log('position: ' + position, 'value: ' + value);
                }
            });
        });
    });

})(jQuery);


