$(function() {
    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });
    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("transform");
        $("#nav").toggleClass("device");

    });

    /*Skills*/
    $("#react").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("rotate");
    });
    $("#redux").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("rotate3d");
    });
    $("#html").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("jump");
    });
    $("#css").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("fall-down ");
    });
    $("#js").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("rotate");
    });
    $("#python").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("rotate3d");
    });
});
