// --------------- function that runs when scroll ---------------
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 50) {
        $('.lower-nav').addClass('navbar-toggle');
        $('.main-container').addClass('main-container-toggle');
    } else {
        $('.lower-nav').removeClass('navbar-toggle');
        $('.main-container').removeClass('main-container-toggle');
    }
});