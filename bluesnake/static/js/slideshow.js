var slides = $("#projects-slideshow .slides ");
var lastIndex=-1;
function ActivateSlide(slideshowID, slideIndex)
{
    if (slideIndex != lastIndex) {
        $("#" + slideshowID  + " .slides .slide").css("display", "none");
        var slideToActivate =  $("#" + slideshowID  + " .slides" + " #" + slideshowID + "-slide-" + slideIndex);
        var oldDot =        $("#" + slideshowID + " #" + slideshowID + "-dot-" + lastIndex);
        var dotToActivate = $("#" + slideshowID  + " #" + slideshowID + "-dot-" + slideIndex);
        if (lastIndex < slideIndex) slideToActivate.css("animation-name", "swipe-left");
        else if (lastIndex > slideIndex) slideToActivate.css("animation-name", "swipe-right");
        slideToActivate.css("display", "flex");
        dotToActivate.css("width", "8vw");
        oldDot.css("width", "4vw");
        lastIndex = slideIndex;
    }
}
if (slides.length > 0) {
    ActivateSlide("projects-slideshow", 0);
}
