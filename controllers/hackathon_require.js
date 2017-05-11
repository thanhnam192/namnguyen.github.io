app.controller("hackathonDemo", function ($scope) {
    $scope.isShowList = true;
    $scope.addNew = function () {
        $scope.isShowList = false;
        $scope.isShowAdd = true;
        $scope.isShowRead = false;


    }
    
    $scope.read=function(){
          $scope.isShowList = false;
        $scope.isShowAdd = false;
        $scope.isShowRead = true;
        
    }
    $scope.create = function () {

      $scope.showList();
    }
    $scope.showList=function(){
             $scope.isShowList = true;
        $scope.isShowAdd = false;
        $scope.isShowRead = false;
    }


})