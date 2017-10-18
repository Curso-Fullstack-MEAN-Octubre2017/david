'use strict';

angular.module('customerDetailsModule', []);

angular.module('customerDetailsModule')
    .component('customerDetailsModule', {
        templateUrl:'/app/customerDetails/customerDetails.html',
        controller: function($scope, $http, $routeParams) {
            console.log("Incializando customerDetails", $routeParams.id);
            
            $scope.customer = {};
            $scope.pet = {};
            
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
        		
        		
        		
				console.log("Guardando ", $scope.pet);
        		$http.put("/api/customers/" + $routeParams.id + "pets", $scope.pet).then(
        				function(response) {
        					console.log("OK Response:", response);
        				},
        				function(response) {
        					console.log("KO Response:", response);
        				}
        		);
        		
        	};            
        	
        	
        	$scope.save = function(){
				console.log("Insertando ", $scope.customer);

        		$http.post("/api/customers/" + $routeParams.id + "pets", $scope.customer).then(
        				function(response) {
        					console.log("OK Response:", response);
        					$scope.customer = response.data;
        				},
        				function(response) {
        					console.log("KO Response:", response);
        				}
        		);
        		
				console.log("Insertando ", $scope.pet);
        		$http.post("/api/pets", $scope.pet).then(
        				function(response) {
        					console.log("OK Response:", response);
        					$scope.pet = response.data;
        				},
        				function(response) {
        					console.log("KO Response:", response);
        				}
        		);
        		
        	}; 
        	

        	
        	
        	
        }
    });

    