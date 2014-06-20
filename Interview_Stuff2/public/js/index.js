/**
 * Created by Raj on 6/7/14.
 */
console.log('test');

var myapp = angular.module('state_app',[]);
myapp.controller('state_cntrl',function($scope,$http){
    $scope.message = 'Hello World';

    $http.get('/states').success(function(data){
        $scope.message = data;
        $scope.getStateInfo = function(state){
            console.log(state.abbreviation);
            $http.get('/states/'+ state.abbreviation).success(function(data){
                var name = _.pluck(JSON.parse(data.data),'name');
                $scope.info = name;

            });
        };

        $scope.clickmodal = function($event){
            $scope.info = false;
        };

        $scope.clickmodaldata = function($event){
            $event.stopImmediatePropagation();

        };

    });
});