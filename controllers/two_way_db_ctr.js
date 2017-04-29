app.controller("two_way_db",function($scope){
	$scope.name = "AngularJS";

    $scope.changeModel = function(){
        $scope.name = "Everybody"
    }
})