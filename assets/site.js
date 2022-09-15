jQuery(document).ready(function () {
    jQuery("a[href^='#']").click(function (e) {
        e.preventDefault();
        var elem = jQuery(this).attr("href");

        jQuery("html, body").animate(
            {
                scrollTop: jQuery(elem).offset().top - 70,
            },
            0
        );
    });
});

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1){
        jQuery('#header-section').addClass("header-post-scroll").removeClass("header-pre-scroll");
        jQuery('#header-logo-link').show();
    }
    else{
        jQuery('#header-section').addClass("header-pre-scroll").removeClass("header-post-scroll");
        jQuery('#header-logo-link').hide();
    }
});