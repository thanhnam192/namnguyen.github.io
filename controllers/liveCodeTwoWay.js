app.controller("liveCodeTwoWay", function ($timeout) {
    var mySwiper;
    Reveal.addEventListener('liveCodeTwoWay', function () {
        if (mySwiper == null) {
            $timeout(function () {
                new Swiper('.live-code-twoway .swiper-container', {
                    speed: 1000,
                    spaceBetween: 100,
                    nextButton: ".live-code-twoway .swiper-button-next",
                    prevButton: ".live-code-twoway .swiper-button-prev",

                })
            }, 1000);
            $('pre code').each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    }, false);


})