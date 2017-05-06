app.controller('otherFeatures', function ($timeout) {
    Reveal.addEventListener('slidechanged', function (event) {
        console.log(1, event)

    });
    Reveal.addEventListener('otherFeatures', function (event) {
        $timeout(function () {

            var mySwiper = new Swiper('.swiper-container', {
                speed: 1000,
                spaceBetween: 100,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                  effect: 'flip',
            })
        }, 1000);
        // TODO: Sprinkle magic
    }, false);




})