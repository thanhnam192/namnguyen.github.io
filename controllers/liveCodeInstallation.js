app.controller("liveCodeInstallation", function ($timeout) {
    Reveal.addEventListener('liveCodeInstallation', function () {
        $timeout(function () {
            console.log(123);
            var mySwiper = new Swiper('.installation .swiper-container', {
                speed: 1000,
                spaceBetween: 100,
                nextButton: ".installation .swiper-button-next",
                prevButton: ".installation .swiper-button-prev",

            })
        }, 1000);
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    }, false);


})