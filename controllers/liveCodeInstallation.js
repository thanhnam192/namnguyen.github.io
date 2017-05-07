app.controller("liveCodeInstallation", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('liveCodeInstallation', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.installation .swiper-container', {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".installation .swiper-button-next",
                    prevButton: ".installation .swiper-button-prev",

                })
            }, 1000);
            $('.installation pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);


})