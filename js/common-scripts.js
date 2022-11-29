(function ($) {
    $(function () {

        //Global Script Start
        $('.phone-nav').click(function () {
            $("body").toggleClass("navshown");
            /*$(".nav-wrap").slideToggle(500)*/
        });

        $('.cart-btn, .cart-counter').click(function () {
            $("body").addClass("cart-shown");
        });

        $('.close-area').click(function () {
            $("body").removeClass("cart-shown");
        });

        $('.dropdown').parent('li').addClass('nav-drop-down')

        $(".nav-drop-down").each(function () {
            var $this = $(this);
            $this.find(" > a").on("click touch", function (e) {
                e.preventDefault()
                $(".nav-drop-down").removeClass("nav-drop-down-show")
                $(".dropdown").slideUp();
                if ($this.find(".dropdown:visible").length) {
                    $(".nav-drop-down").removeClass("nav-drop-down-show")
                    $(".dropdown").slideUp();
                } else {
                    $this.addClass("nav-drop-down-show")
                    $(".dropdown").slideUp();
                    $this.find(".dropdown").slideDown();
                }
            })
        })

        if($('.cart-wrap').length){
            $(window).on('load resize', function(){
              var cartTopHeight = $('.cart-header').outerHeight(),
                windowHeight = $(window).outerHeight(),
                windowNeedHeight = windowHeight - cartTopHeight,
                bottomPadding = $('.cart-bottom').outerHeight();
                $('.cart-main').css({'height': windowNeedHeight, 'padding-bottom': bottomPadding})
            })
        }
        
        
        //Home Script Start
        if ($('.aged-slider').length) {


            var $slider = $('.aged-slider');
            $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 400,
                arrows: true,
                centerMode: true,
                infinite: true,
                loop: true,
                navigation: false,
                centerPadding: '0',
                dots: true,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            arrows: false,
                            slidesToShow: 2,
                            centerMode: false,

                        }
                },
                    {
                        breakpoint: 767,
                        settings: {
                            centerMode: false,
                            infinite: false,
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoPlay: true,
                        },
                }
            ]
            });


        }

        if ($('.related-cocktails-item-wrap').length) {

            var $slider = $('.related-cocktails-item-wrap');
            $slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 400,
                arrows: true,
                centerMode: true,
                infinite: true,
                loop: true,
                navigation: false,
                centerPadding: '0',
                mobileFirst: true,
                dots: true,

                responsive: [
                    {
                        breakpoint: 999,
                        settings: "unslick"
                },
                    {
                        breakpoint: 600,
                        settings: {
                            centerMode: false,
                            infinite: false,
                            arrows: false,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoPlay: true,
                        },
                },
                    {
                        breakpoint: 320,
                        settings: {
                            centerMode: false,
                            infinite: false,
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoPlay: true,
                        },
                }
            ]
            });


        }

        if ($('.newsletter-item-wrap').length) {
            $('.newsletter-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 700,
                navigation: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                centerMode: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                        }
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.newsletter-item-wrap').slick('resize');
            });
        }

        //Single_Rum Script Start
        $(".product-single-accordion").each(function () {
            var $this = $(this);
            $this.find(" > h5").on("click touch", function () {
                $(".product-single-accordion").removeClass("rum-accordion-active")
                $(".product-single-accordion-content").slideUp();
                if ($this.find(".product-single-accordion-content:visible").length) {
                    $(".product-single-accordion").removeClass("rum-accordion-active")
                    $(".product-single-accordion-content").slideUp();
                } else {
                    $this.addClass("rum-accordion-active")
                    $(".product-single-accordion-content").slideUp();
                    $this.find(".product-single-accordion-content").slideDown();
                }
            })
        })

        if ($('.single-rum').length) {
            $('body').addClass('single-rum-page')
        }

        if ($('.product-single-thumb-wrap').length) {
            $('.product-single-thumb-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 0,
                        settings: 'unslick'
        },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                        }
        },
                    {
                        breakpoint: 768,
                        settings: 'unslick'
        },
        ]
            });

            $(window).on('resize', function () {
                $('.product-single-thumb-wrap').slick('resize');
            })
        }

        if ($('.merch-product-carousels').length) {
            $('.merch-product-carousels').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 481,
                        settings: 'unslick'
                    }
                            ]
            });

            $(window).on('resize', function () {
                $('.merch-product-carousels').slick('resize');
            })
        }


        $('.merch-tab-item').eq(0).show()
        $('.merch-tab-trigger ul li').eq(0).addClass('merch-tab-active')
        $('.merch-tab-trigger ul li').click(function () {
            $('.merch-tab-trigger ul li').removeClass('merch-tab-active');
            $(this).addClass('merch-tab-active');
            $('.merch-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).show();
            return false;
        });



        // Start Rums Js
        if ($('.rums').length) {
            $("body").addClass("rums-page");
        };
        // End Rums Js
        // Start cocktails Js
        if ($('.cocktails').length) {
            $("body").addClass("cocktails-page");
        };
        if ($('.single-cocktails').length) {
            $("body").addClass("single-cocktails-page");
        };
        // End cocktails Js

        
            $('.submenu').parent('li').addClass('has-subnav')
            var $window = $(window);
            if ($window.width() > 991) {
                $('.has-subnav').each(function () {
                    var $this = $(this);

                    $this.find('> a').mouseenter(function () {
                        $this.find('.submenu').fadeIn()
                        $this.find('.submenu').parents('.nav-right-bar').css({'z-index': 2})
                        $("body").addClass("submenuShown");
                    })
                    $this.mouseleave(function () {
                        $this.find('.submenu').fadeOut();
                        $("body").removeClass("submenuShown");
                        $this.find('.submenu').parents('.nav-right-bar').css({'z-index': 3})
                    })
                    $('.has-subnav > a').click(function (e) {
                        e.preventDefault();
                    })
                })
                
            }
            if ($window.width() < 992) {
                console.log('mobile')
             
                
                $(".has-subnav").each(function () {
                    var $this = $(this);
                    $this.find(" > a").on("click touch", function (e) {
                        e.preventDefault()
                        $(".has-subnav").removeClass("arrow-rotate")
                        $(".submenu").slideUp();
                        if ($this.find(".submenu:visible").length) {
                            $(".has-subnav").removeClass("arrow-rotate")
                            $(".submenu").slideUp();
                        } else {
                            $this.addClass("arrow-rotate")
                            $(".submenu").slideUp();
                            $this.find(".submenu").slideDown();
                        }
                    })
                })

            }

        $('.cart-close, .cart-wrap').click(function () {
            $("body").removeClass("cart-shown");
        });
        $('.cart-main-wrap').click(function (e) {
            e.stopPropagation();
        });


        $('.merch-tab-item').eq(0).show()
        $('.merch-tab-trigger ul li').eq(0).addClass('merch-tab-active')
        $('.merch-tab-trigger ul li').click(function () {
            $('.merch-tab-trigger ul li').removeClass('merch-tab-active');
            $(this).addClass('merch-tab-active');
            $('.merch-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        if ($('.merch-single-page').length) {
            $('body').addClass('merch-single-page')
        }

        $('.select-size').on('click touch', function () {
            var $this = $(this);
            $('.select-size ul').slideToggle();

        })
        $('.select-size ul li').click(function () {
            var $this = $(this).text(),
                sizeVal = $('.select-size em');
            sizeVal.text($this)
        })

        if ($('.header-wrap').length) {
            var header = new Headroom(document.querySelector("header"), {
                tolerance: 5,
                offset: 40,
                classes: {
                    initial: "animated",
                    pinned: "slideDown",
                    unpinned: "slideUp"
                }
            });
            header.init();
        }
        
        $('.video-modal-trigger').each(function(){
            var $this = $(this);
            
            $this.find('a').on('click', function(e){
                e.preventDefault();
                var $$this = $(this);
                var thisHref = $$this.attr('href');
                
                console.log(thisHref)
                $('.video-modal-main iframe').attr('src', thisHref)
                $('.video-modal').fadeIn()
                
            })
            $('.video-close-btn, .video-modal').on('click', function(){
                 $('.video-modal-main iframe').attr('src', '')
                $('.video-modal').fadeOut()
            })
            $('.video-modal-main iframe').on('click', function(e){
                e.stopPropagation()
            })
            
        })
        
        var winScrollTop=0;
        $.fn.is_on_screen = function(){    
            var win = $(window);
            var viewport = {
                top : win.scrollTop(),
                left : win.scrollLeft()
            };
            //viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();

            var bounds = this.offset();
            //bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();

            return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
        };
        function parallax() {
            $('.parallax-section').each(function () {
                if ($(this).is_on_screen()) {
                    var firstTop = $(this).offset().top;
                    $(this).find(".rellax").each(function () {
                        var $span = $(this);
                        if ($(window).width() < 320) {
                            var speed = $(this).data('rellax-xs-speed') * -1;
                        } else {
                            var speed = $(this).data('rellax-speed') * -1;
                        }
                        var moveTop = (firstTop - winScrollTop) * speed;
                        $span.css("transform", `translateY(${ -moveTop}px)`);
                    });
                    $(this).find(".rellax-top").each(function () {
                        var $span = $(this);
                        if ($(window).width() < 320) {
                            var speed = $(this).data('rellax-xs-speed') * -1;
                        } else {
                            var speed = $(this).data('rellax-speed') * -1;
                        }
                        var moveTop = (firstTop - winScrollTop) * speed;
                        $span.css("transform", `translateY(${ moveTop}px)`);
                    });
                }

            });
        }
        $(window).scroll(function (e) {
            winScrollTop = $(this).scrollTop();
            parallax();
        });
        
    })
})(jQuery)

var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}


function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}


function increaseValue(button, limit) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if (isNaN(value)) value = 0;
    if (limit && value >= limit) return;
    numberInput.innerHTML = value + 1;
}


function decreaseValue(button) {
    const numberInput = button.parentElement.querySelector('.number');
    var value = parseInt(numberInput.innerHTML, 10);
    if (isNaN(value)) value = 0;
    if (value < 2) return;
    numberInput.innerHTML = value - 1;
}