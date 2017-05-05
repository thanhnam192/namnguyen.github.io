var app=angular.module("app",["ngAnimate","ngTouch","angular-carousel","frapontillo.bootstrap-switch"]);app.controller("ctr",function($scope,$timeout){$scope.getSection=function(section){return"slides/"+section.contain+".html"},$timeout(function(){Reveal.initialize({controls:!0,progress:!0,history:!0,center:!0,width:1200,height:700,transition:"concave",dependencies:[{src:"lib/js/classList.js",condition:function(){return!document.body.classList}},{src:"plugin/markdown/marked.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/markdown/markdown.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/highlight/highlight.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}},{src:"plugin/zoom-js/zoom.js",async:!0},{src:"plugin/notes/notes.js",async:!0}]})},3e3)}),app.controller("ctr4",function($scope){$scope.click=function(feature,state){$scope[feature]=state}}),app.controller("ctr5",function($scope){$scope.table1=[{name:"JavaScript",value:"90"},{name:"AngularJS",value:"40"},{name:"PHP",value:"35"},{name:"NodeJS",value:"32"},{name:"Wordpress",value:"30"},{name:"React",value:"28"}]}),app.controller("domManipulation",function($scope){$scope.classes=["text-primary","text-danger","text-success"],$scope.class="text-primary",$scope.getClass=function(classString){try{return JSON.parse(classString)}catch(exception){return{}}}}),app.controller("two_way_db",function($scope){$scope.name="AngularJS",$scope.changeModel=function(){$scope.name="Everybody"}}),app.directive("searchField",function(){return{restrict:"E",scope:{value:"@"},template:'<div class="form-inline input-group-lg"><input type="text" ng-model="value" class="nam_text form-control" /><button class="nam_btn btn btn-primary btn-lg" ng-click="onSubmit()" >Search</button></div><b>{{result}}</b>',controller:function($scope){$scope.result="Result: ",$scope.onSubmit=function(){$scope.result="Result: "+$scope.value},$scope.onSubmit()}}}),app.controller("ctrlMVC",function($timeout){$timeout(function(){function activeFirst(){section.first().addClass("active"),section.first().find("*").css({transform:"none",opacity:1}),linkParent.first().addClass("active")}function checkKey(e){if(e=e||window.event,"38"==e.keyCode){var prev=mvcSlides.prev();$(prev).find("a").trigger("click")}else if("40"==e.keyCode){var next=mvcSlides.next();$(next).find("a").trigger("click")}}function TraversableArray(){console.log(arguments),"number"==typeof arguments[0]?this.length=arguments[0]:this.push.apply(this,arguments),this.current=0}console.log(),console.log("run");var link=$(".com__nav-link"),linkParent=link.parent("li"),section=$(".com__section"),sectionContent=section.find("*"),slides=$(".slides"),switchTab=function(){var p=$(this).parent("li"),i=p.index(),s=section.eq(i),c=s.find("*");return section.removeClass("active"),sectionContent.removeAttr("style"),s.addClass("active"),c.css({transform:"none",opacity:1}),linkParent.removeClass("active"),p.addClass("active"),!1};link.on("click",switchTab),activeFirst(),Reveal.addEventListener("mvcState",function(){slides.css({zoom:"1",height:"100%"}),$("pre code").each(function(i,block){setTimeout(function(){hljs.highlightBlock(block)},100)})}),Reveal.addEventListener("slidechanged",function(event){}),$("img").off("mouseover").off("mouseout").on("mouseover",function(){$("h2").css("color","#404855")}).on("mouseout",function(){$("h2").css("color","white")}),document.onkeydown=checkKey,TraversableArray.prototype=[],TraversableArray.prototype.constructor=TraversableArray,TraversableArray.prototype.next=function(){var self=this[0],index=++this.current;return this.current==self.length&&(this.current=0),self[index%self.length]},TraversableArray.prototype.prev=function(){var self=this[0],index=--this.current;return this.current+self.length<=0&&(this.current=0),self[(index+self.length)%self.length]};var mvcSlides=new TraversableArray(Array.prototype.slice.call(linkParent))},1e3)}),app.directive("renderNestedHtml",function($timeout){return{compile:function(element,attrs){var rawHtml=element[0].innerHTML,code=angular.element("<code data-trim></code>");code.text(rawHtml.trim()),element.replaceWith(code)}}});