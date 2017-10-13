'use strict';

angular.module('sampleModule')
    .component('sampleModule', {
        templateUrl:'/app/sample-module/sample-module.html',
        controller: function($scope, $http) {
            console.log("Incializando sample-module")
            
            $http.get("/api/sample").then(function(response){
            	console.log(response.data);
            	$scope.sampleData = response.data;
            });
        }
    });

    