var app = angular.module("app", ['ngAnimate', 'ngTouch', 'angular-carousel', 'frapontillo.bootstrap-switch']);
app.controller("ctr", function ($scope, $timeout) {
    var slidesFolder = "slides/";


    $scope.getSection = function (section) {
        return slidesFolder + section.contain + ".html";

    };
    $timeout(function () {
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,
            width: 1200,
            height: 700,
            transition: 'concave', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                {src: 'lib/js/classList.js', condition: function () {
                        return !document.body.classList;
                    }},
                {src: 'plugin/markdown/marked.js', condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }},
                {src: 'plugin/markdown/markdown.js', condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }},
                {src: 'plugin/highlight/highlight.js', async: true, callback: function () {
                        hljs.initHighlightingOnLoad();
                    }},
                {src: 'plugin/zoom-js/zoom.js', async: true},
                {src: 'plugin/notes/notes.js', async: true}
            ]
        });
       

    }, 3000)


})