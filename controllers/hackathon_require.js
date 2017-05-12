app.controller("hackathonDemo", function ($scope) {

    $scope.list = [
        {note: "Note 1",
            desc: "Description 1"

        },
        {note: "Note 2",
            desc: "Description 3"

        },
  
      
    ]
    $scope.colors = [
        {
            color:"#29b6f6",
            name: "Blue"
        },
        {
            color:"#8bc34a",
            name: "Light green"
        },
        {
            color:"#cddc39"            ,
            name: "Lime"
        }

    ]
    $scope.isShowList = true;
    $scope.addNew = function ($event) {
        $event.stopPropagation();
        $scope.addNote = {}
        $scope.isShowList = false;
        $scope.isShowAdd = true;
        $scope.isShowRead = false;


    }

    $scope.read = function (item) {
        $scope.selectedNote = item;
        $scope.isShowList = false;
        $scope.isShowAdd = false;
        $scope.isShowRead = true;

    }
    $scope.create = function () {
        $scope.list.push($scope.addNote)
        $scope.showList();
    }
    $scope.showList = function () {
        $scope.isShowList = true;
        $scope.isShowAdd = false;
        $scope.isShowRead = false;
    }


})