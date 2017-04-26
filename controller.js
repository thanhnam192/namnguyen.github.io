var app = angular.module("app",[]);
app.controller("ctr",function($scope,slides,$timeout){
	$scope.var = "hieu"
	var slidesFolder = "slides/"
	$scope.changeName = function(){
		$scope.var = "name is changed"
		
		
	}
	$scope.sections = slides
	
	$scope.getSection = function(section){
		return slidesFolder+section.contain+".html";
		
	}
	$timeout(function(){
		Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,

				transition: 'concave', // none/fade/slide/convex/concave/zoom

				// More info https://github.com/hakimel/reveal.js#dependencies
				dependencies: [
					{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'plugin/zoom-js/zoom.js', async: true },
					{ src: 'plugin/notes/notes.js', async: true }
				]
			});
	},2)

	
})