app.directive("searchField",function(){
    return {
        restrict : 'E',
        template : '<div>' +
            '<input type="text" ng-model="value" class="nam_text" />' +
            '<button class="nam_btn"  ng-click="onSubmit()">Search</button>' +
            '</div>' + 
            '<b>{{result}}</b>',
        controller : function($scope){
            $scope.value = '';
            $scope.result = 'Result: ';
            $scope.onSubmit = function(){
                $scope.result = 'Result: ' + $scope.value;
            }
        }
    }
})