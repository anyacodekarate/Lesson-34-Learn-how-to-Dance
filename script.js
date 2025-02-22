// Smooth Scroll for Navigation Links
$('a').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    }
});
