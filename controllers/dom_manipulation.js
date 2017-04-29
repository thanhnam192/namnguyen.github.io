app.controller("domManipulation",function($scope){
	$scope.classes=['text-primary','text-danger','text-success']
    $scope.class='text-primary';
	$scope.getClass=function(classString){
	    try{
            return JSON.parse(classString)

        }catch(exception){
	        return {};
        }

    }
})