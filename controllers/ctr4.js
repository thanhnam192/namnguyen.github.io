app.controller("ctr4",function($scope){
	$scope.mvcState = "state1"
	$scope.click=function(feature,state){
		console.log('sad')
		$scope[feature]=state


	}
})