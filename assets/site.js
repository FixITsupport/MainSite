jQuery(document).ready(function () {
    /*Smooth Scrolling anchor tags*/
    jQuery(".nav-item a[href^='#']").click(function (e) {
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
    /*Header Section BG/Opacity*/
    if (jQuery(this).scrollTop() > 1){
        jQuery('#header-section').addClass("header-post-scroll").removeClass("header-pre-scroll");
        jQuery('#header-logo-link-white').hide();
        jQuery('#header-logo-link-black').show();
    }else{
        jQuery('#header-section').addClass("header-pre-scroll").removeClass("header-post-scroll");
        jQuery('#header-logo-link-white').show();
        jQuery('#header-logo-link-black').hide();
    }
    
    /*Header Section BG/Opacity*/
    if (jQuery(this).scrollTop() > 200){
        jQuery("#scrollToTop-wrapper").show();
    }else{
        jQuery("#scrollToTop-wrapper").hide();
    }
});

/*Scroll to Top*/
function scrollToTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}