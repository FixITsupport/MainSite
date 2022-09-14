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