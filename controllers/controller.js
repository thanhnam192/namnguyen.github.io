var app = angular.module("app", ['ngAnimate', 'ngTouch', 'angular-carousel', 'frapontillo.bootstrap-switch','ngMaterial']);
app.config(function($mdThemingProvider) {
 $mdThemingProvider.theme('default')
    .primaryPalette('blue')


});
app.controller("ctr", function ($scope, $timeout) {
    
    var slidesFolder = "slides/";


    $scope.getSection = function (section) {
        return slidesFolder + section.contain + ".html";

    };
    function registerEvent() {

       

    }
    $timeout(function () {
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
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
              
                {src: 'plugin/zoom-js/zoom.js', async: true},
                {src: 'plugin/notes/notes.js', async: true}
            ]
        });
        registerEvent();


    }, 3000)





})