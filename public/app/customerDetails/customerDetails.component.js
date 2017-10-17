'use strict';

angular.module('customerDetailsModule', []);

angular.module('customerDetailsModule')
    .component('customerDetailsModule', {
        templateUrl:'/app/customerDetails/customerDetails.html',
        controller: function($scope, $http, $routeParams) {
            console.log("Incializando customerDetails", $routeParams.id);
            
            $scope.customer = {};
            
            $http.get("/api/customers/" + $routeParams.id).then(function(response){
            	console.log("GET /api/customers/id response:", response.data);
            	$scope.customer = response.data;
            });
        	
        	$scope.update = function(){
				console.log("Guardando ", $scope.customer);

        		$http.put("/api/customers/" + $routeParams.id, $scope.customer).then(
        				function(response) {
        					console.log("OK Response:", response);
        				},
        				function(response) {
        					console.log("KO Response:", response);
        				}
        		);
        		
        	};            
        }
    });

    