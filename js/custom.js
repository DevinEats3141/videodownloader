$(document).ready(function () {
    $("#slide").click(function () {
        var hidden = $(".slide-menu");
        if (hidden.hasClass("visible")) {
            hidden.animate({ left: "-1000px" }, "slow").removeClass("visible");
            $(".bg-overlay").fadeOut("slow");
        } else {
            hidden.animate({ left: "0px" }, "slow").addClass("visible");
            $(".bg-overlay").fadeIn("slow");
        }
    });
    $(".close-slide-menu, .bg-overlay").click(function () {
        var hidden = $(".slide-menu");
        if (hidden.hasClass("visible")) {
            hidden.animate({ left: "-1000px" }, "slow").removeClass("visible");
            $(".bg-overlay").fadeOut("slow");
        }
    });
});
$(document).ready(function () {
    var nav = function () {
        $(".gw-nav > li > a").click(function () {
            var gw_nav = $(".gw-nav");
            gw_nav.find("li").removeClass("active");
            $(".gw-nav > li > ul > li").removeClass("active");
            var checkElement = $(this).parent();
            var ulDom = checkElement.find(".gw-submenu")[0];
            if (ulDom == undefined) {
                checkElement.addClass("active");
                $(".gw-nav").find("li").find("ul:visible").slideUp();
                return;
            }
            if (ulDom.style.display != "block") {
                gw_nav.find("li").find("ul:visible").slideUp();
                gw_nav.find("li.init-arrow-up").removeClass("init-arrow-up").addClass("arrow-down");
                gw_nav.find("li.arrow-up").removeClass("arrow-up").addClass("arrow-down");
                checkElement.removeClass("init-arrow-down");
                checkElement.removeClass("arrow-down");
                checkElement.addClass("arrow-up");
                checkElement.addClass("active");
                checkElement.find("ul").slideDown(300);
            } else {
                checkElement.removeClass("init-arrow-up");
                checkElement.removeClass("arrow-up");
                checkElement.removeClass("active");
                checkElement.addClass("arrow-down");
                checkElement.find("ul").slideUp(300);
            }
        });
        $(".gw-nav > li > ul > li > a").click(function () {
            $(this).parent().parent().parent().removeClass("active");
            $(".gw-nav > li > ul > li").removeClass("active");
            $(this).parent().addClass("active");
        });
    };
    nav();
});
jQuery(function ($) {
    $(".faq-list .question").click(function () {
        $(this).parent().find(".answer").slideToggle("fast");
        $(this).toggleClass("on");
        return false;
    });
});
$(".brands").slick({
    dots: false,
    infinite: true,
	autoplay: false,
  speed:300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>',
    responsive: [
        { breakpoint: 1444, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: true,centerPadding: '30px' } },
        { breakpoint: 800, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
});
$(".most-purchased-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>',
    responsive: [
        { breakpoint: 1444, settings: { slidesToShow: 3, slidesToScroll: 1 } },
		{ breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		{ breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 515, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
});
$(".sitejab-review-box").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></i></div>',
    responsive: [
        { breakpoint: 1444, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1  } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1} },
    ],
});

$(".related-services").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>',
    responsive: [
       { breakpoint: 1444, settings: { slidesToShow: 3, slidesToScroll: 1 } },
		{ breakpoint: 1100, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		{ breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 515, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
});

if ($(window).width() < 991) {
    $(".all-service-menu").remove();
    $(".mobile-menu").attr("id", "slide");
   // $(".head-search").appendTo(".header-bottom");
   /* $(".mobboxslider").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        centerMode: true,
        centerPadding: "10%",
        adaptiveHeight: true,
        responsive: [
            { breakpoint: 1444, settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false, centerPadding: "0px", arrows: true } },
            { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false, centerMode: true, centerPadding: "20%", arrow: false } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "25px", arrow: false } },
        ],
    });*/
}

jQuery(($) => {
    const speed = 100;
    $('a[href*="#"]')
        .filter((i, a) => a.getAttribute("href").startsWith("#") || a.href.startsWith(`${location.href}#`))
        .unbind("click.smoothScroll")
        .bind("click.smoothScroll", (event) => {
            const targetId = event.currentTarget.getAttribute("href").split("#")[1];
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: $(targetElement).offset().top }, speed);
            }
        });
});
$(".myaccount").click(function () {
    $(".myaccountlist").toggle();
    $(this).toggleClass("accopen");
});
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 400) {
        $("#toTop").fadeIn();
    } else {
        $("#toTop").fadeOut();
    }
});
$("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    },
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    },
};
(function () {
    if (typeof EventTarget !== "undefined") {
        let func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.func = func;
            if (typeof capture !== "boolean") {
                capture = capture || {};
                capture.passive = false;
            }
            this.func(type, fn, capture);
        };
    }
})();

// autocomplete fn start
$(function() {
    function loadScriptAndInitAutocomplete(selector) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'https://www.mediamister.com/js/jquery-ui.min.js');
        script.onload = function() {
            initAutocomplete(selector);
        };
        document.head.appendChild(script);
    }
    function initAutocomplete(selector) {
        $(selector).autocomplete({
            autoFocus: true,
            minLength: 0,
            delay: 0,
            source: function(request, response) {
                $("#err").hide();
                $(".search_load").show(); // Show loading icon
                $.ajax({
                    url: "https://www.mediamister.com/ajax-autocomplete-services",
                    type: "post",
                    dataType: "json",
                    data: { search: request.term },
                    success: function(data) {
                        $(".search_load").hide(); // Hide loading icon
                        if (data.length === 0) {
                            data.push({ label: "No data found", value: "" });
                        }
                        response(data);
                    },
                    error: function() {
                        $(".search_load").hide(); // Hide loading icon on error
                    }
                });
            },
            select: function(event, ui) {
                if (ui.item.label !== "No data found") {
                    $(selector).val(ui.item.label);
                    if (ui.item.url_path && ui.item.url_path != "") {
                        window.location.href = ui.item.url_path;
                    }
                    $.post("search-session", { search_result: ui.item.label });
                } else {
                    $("#err").show().html("No data found!"); // Show error message
                    $(selector).val(""); // Clear input
                }
                return false;
            },
            open: function() {
                $('#ui-id-1 li:first div').addClass('search-title');
            }
        });
    }
    $('#autocomplete').click(function(e) {
        loadScriptAndInitAutocomplete("#autocomplete");
    });
    $('#mobautocomplete').click(function(e) {
        loadScriptAndInitAutocomplete("#mobautocomplete");
    });
    // Initialize autocomplete on input
    $("#autocomplete").on("keyup", function() {
        initAutocomplete("#autocomplete");
    });
    $("#mobautocomplete").on("keyup", function() {
        initAutocomplete("#mobautocomplete");
    });
});
// autocomplete fn end

$(function() {
    function loadScriptAndInitAutocomplete(selector) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', 'https://www.mediamister.com/js/jquery-ui.min.js');
        script.onload = function() {
            initAutocomplete(selector);
        };
        document.head.appendChild(script);
    }
    function initAutocomplete(selector) {
        $(selector).autocomplete({
            autoFocus: true,
            minLength: 0,
            delay: 0,
            source: function(request, response) {
                $("#err").hide();
                $(".search_load").show(); // Show loading icon
                $.ajax({
                    url: "https://www.mediamister.com/ajax-autocomplete-services",
                    type: "post",
                    dataType: "json",
                    data: { search: request.term },
                    success: function(data) {
                        $(".search_load").hide(); // Hide loading icon
                        if (data.length === 0) {
                            data.push({ label: "No data found", value: "" });
                        }
                        response(data);
                    },
                    error: function() {
                        $(".search_load").hide(); // Hide loading icon on error
                    }
                });
            },
            select: function(event, ui) {
                if (ui.item.label !== "No data found") {
                    $(selector).val(ui.item.label);
                    if (ui.item.url_path && ui.item.url_path != "") {
                        window.location.href = ui.item.url_path;
                    }
                    $.post("search-session", { search_result: ui.item.label });
                } else {
                    $("#err").show().html("No data found!"); // Show error message
                    $(selector).val(""); // Clear input
                }
                return false;
            },
            open: function() {
                $('#ui-id-1 li:first div').addClass('search-title');
            }
        });
    }
    $('#autocomplete').click(function(e) {
        loadScriptAndInitAutocomplete("#autocomplete");
    });
    $('#mobautocomplete').click(function(e) {
        loadScriptAndInitAutocomplete("#mobautocomplete");
    });
    // Initialize autocomplete on input
    $("#autocomplete").on("keyup", function() {
        initAutocomplete("#autocomplete");
    });
    $("#mobautocomplete").on("keyup", function() {
        initAutocomplete("#mobautocomplete");
    });
});
$(document).ready(function () {
    $(".gosearch").click(function () {
        $("input.search-field").focus();
    });
    $("input.search-field").focus(function () {
        $(".search-default").show();
    });
    $("input.search-field")
        .keyup(function () {
            if ($(this).val().length > 0) {
                $(".search-default").hide();
            }
        })
        .keyup();
});
$(document).on("click", function (e) {
    if ($(e.target).closest(".head-search,.gosearch").length === 0) {
        $(".search-default").hide();
    }
});
let deferredPrompt;
let installSource;
window.addEventListener("beforeinstallprompt", (e) => {
    $(".install-app-btn-container").show();
    deferredPrompt = e;
    installSource = "nativeInstallCard";
    e.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome === "accepted") {
            deferredPrompt = null;
        }
        ga("send", { hitType: "event", eventCategory: "pwa-install", eventAction: "native-installation-card-prompted", eventLabel: installSource, eventValue: choiceResult.outcome === "accepted" ? 1 : 0 });
    });
});
function showToast(message) {
    let toast = document.getElementById("toast");
    toast.className = "show";
    toast.innerHTML = message;
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 2000);
}
function getPWADisplayMode() {
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    if (document.referrer.startsWith("android-app://")) {
        return "twa";
    } else if (navigator.standalone || isStandalone) {
        return "standalone";
    }
    return "browser";
}
