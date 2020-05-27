$(window).load(function() {
	$(".dotdotdot").dotdotdot();
});
$(window).resize(function() {
	$(".dotdotdot").height("auto");
	$(".dotdotdot").dotdotdot()
});
$(document).ready(function() {
	$('#bttop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#bttop').fadeIn();
		} else {
			$('#bttop').fadeOut();
		}
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
	// $("#send-mail").on("click", function(n) {
	// 	Email.send({
	// 		Host : "smtp.elasticemail.com",
	// 		Username : "kazokute007@gmail.com",
	// 		Password : "E0B27CCEB78BB546F31B4FD953BB24D5E443",
	// 		To : 'kazokute007@gmail.com',
	// 		From : "kazokute1296@gmail.com",
	// 		Subject : "Thông báo từ: "+ window.location.href +"",
	// 		Body : "'<table style='width:100%;border-spacing:0;border-collapse:collapse;border-right:1px solid'>'
	// 			        '<tbody>'
	// 			            '<tr>'
	// 			                '<td style="padding:10px;width:25%;border:1px solid #d2d2d2">Họ tên</td>'
	// 			                '<td style="padding:10px;width:75%;border:1px solid #d2d2d2">Chung Vũ</td>'
	// 			            '</tr>'
	// 			            '<tr>'
	// 			                '<td style="padding:10px;width:25%;border:1px solid #d2d2d2">Điện thoại</td>'
	// 			                '<td style="padding:10px;width:75%;border:1px solid #d2d2d2"></td>'
	// 			            '</tr>'
	// 			            '<tr>'
	// 			                '<td style="padding:10px;width:25%;border:1px solid #d2d2d2">Email</td>'
	// 			                '<td style="padding:10px;width:75%;border:1px solid #d2d2d2"><a href="mailto:vvchungspkt@gmail.com" target="_blank">vvchungspkt@gmail.com</a></td>'
	// 			            '</tr>'
	// 						'<tr>'
	// 			                '<td style="padding:10px;width:25%;border:1px solid #d2d2d2">Địa chỉ</td>'
	// 			                '<td style="padding:10px;width:75%;border:1px solid #d2d2d2"></td>'
	// 			            '</tr>'
	// 			            '<tr>'
	// 			                '<td style="padding:10px;width:25%;border:1px solid #d2d2d2">Nội dung</td>'
	// 			                '<td style="padding:10px;width:75%;border:1px solid #d2d2d2"></td>'
	// 			            '</tr>'
	// 			        '</tbody>'
	// 			    '</table>"
	// 	}).then(
	// 	message => alert(message)
	// 	)
	// });
	
});
