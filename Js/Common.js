$(window).load(function() {
	$(".dotdotdot").dotdotdot();
});
$(window).resize(function() {
    $(".dotdotdot").height("auto");
    $(".dotdotdot").dotdotdot()
});
$(document).ready(function() {
	$(function() {
        $(window).scroll(function() {
            var n = $(this).scrollTop();
            n >= $("#header").innerHeight() ? $("#menu").addClass("fixed") : $("#menu").removeClass("fixed")
        });
        $(window).scroll(function() {
            var n = $(this).scrollTop();
            n >= 300 ? ($("#bttop").fadeIn(), $(".show-toc h2, .show-toc h3").length > 0 && $("#gl-toc-fixed").show()) : ($("#bttop").fadeOut(), $("#gl-toc-fixed").hide())
        });
        $("#bttop").click(function() {
            event.preventDefault();
            $("body,html").animate({
                scrollTop: 0
            }, 1600)
        })
    });
    $(function() {
      $("img").lazy({
       effect: "fadeIn",
       effectTime: 1e3,
       placeholder: "../css/icon/logo.png"
   });
      $(".noidung img").attr("data-lightbox", "roadtrip");
      var n = 0;
      $(".noidung img").each(function() {
       var t = $(this).attr("src"),
       i;
       $(this).parent().is("a") ? (i = $(this).parent("a").attr("href"), i === t && $(this).parent("a").attr({
        "class": "example-image-link countimg" + n,
        "data-lightbox": "example-1"
    })) : ($('<a class="example-image-link countimg' + n + '" href="' + t + '" data-lightbox="example-1"><\/a>').insertBefore($(this)), $(".countimg" + n).append($(this)));
       n++
   });
      lightbox.option({
       resizeDuration: 200,
       wrapAround: !0
   })
  });
    if ($(".banner-slide-home .wImage").size() > 1) {
        let owl = $(".banner-slide-home .group").addClass('owl-carousel owl-theme').owlCarousel({
            items: 1,
            loop: true,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true,
            nav: false,
            navText: [],
            lazyLoad: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
        });
    }
    if ($(".product-home .group").size() > 1) {
        let owl = $(".product-home .product-container").addClass('owl-carousel owl-theme').owlCarousel({
            items: 3,
            loop: true,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            autoplay: false,
            autoplayTimeout: 5000,
            dots: false,
            nav: true,
            navText: [],
            lazyLoad: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            margin: 0,
            responsive : {
                0: {
                    items: 1,
                    margin: 0
                },
                479: {
                    items: 1,
                    margin: 0
                },
                767: {
                    items: 2,
                    margin: 0
                },
                991: {
                    items: 3,
                    margin: 0
                },
                1199: {
                    items: 3,
                    margin: 0
                }
            }
        });
    }
    if ($(".service-home .service-item").size() > 1) {
        let owl = $(".service-home .group").addClass('owl-carousel owl-theme').owlCarousel({
            items: 3,
            loop: true,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            autoplay: false,
            autoplayTimeout: 5000,
            dots: false,
            nav: true,
            navText: [],
            lazyLoad: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            margin: 30,
            responsive : {
                0: {
                    items: 1,
                    margin: 0
                },
                479: {
                    items: 1,
                    margin: 0
                },
                767: {
                    items: 2,
                    margin: 20
                },
                991: {
                    items: 3,
                    margin: 30
                },
                1199: {
                    items: 3,
                    margin: 30
                }
            }
        });
    }
    if ($(".ct-review-home .review-item").size() > 1) {
        let owl = $(".ct-review-home .group").addClass('owl-carousel owl-theme').owlCarousel({
            items: 3,
            loop: false,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            autoplay: false,
            autoplayTimeout: 5000,
            dots: true,
            nav: false,
            navText: [],
            lazyLoad: true,
            autoplayHoverPause: true,
            smartSpeed: 1500,
            margin: 30,
            responsive : {
                0: {
                    items: 1,
                    margin: 0
                },
                479: {
                    items: 1,
                    margin: 0
                },
                767: {
                    items: 2,
                    margin: 20
                },
                991: {
                    items: 3,
                    margin: 30
                },
                1199: {
                    items: 3,
                    margin: 30
                }
            }
        });
    }
    jQuery(".tab-links a").on("click", function(n) {
        var t = jQuery(this).attr("href");
        jQuery(".collapse " + t).fadeIn(400).siblings().hide();
        jQuery(this).parent("li").addClass("active").siblings().removeClass("active");
        n.preventDefault()
    });
});
