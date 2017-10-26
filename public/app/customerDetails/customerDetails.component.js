'use strict';

angular.module('customerDetailsModule', []);

angular.module('customerDetailsModule')
    .component('customerDetailsModule', {
        templateUrl:'/app/customerDetails/customerDetails.html',
        controller: function($scope, $http, $routeParams, $location, $window) {
            console.log("Incializando customerDetails", $routeParams.id);
            
            $scope.customer = {};
            $scope.pet = {};
            
            var url = $location.path().split('/');
            
            $http.get("/api/customers/" + $routeParams.id).then(function(response){
            	
            	console.log("GET /api/customers/id response:", response.data);
            	
            	$scope.customer = response.data;
            });
            
            $http.get("/api/customers/" + $routeParams.id + "/pets").then(function(response){
            	
            	console.log("GET /api/customers/id/pets response:", response.data);

            	$scope.pet = response.data;
            	
            	console.log("pet tiene: ", $scope.pet);

            });
            
            
            
        	
        	$scope.update = function(){
        		if (window.confirm("Desea actualizar este cliente?")){
        			
    				console.log("Actualizando ", $scope.customer);
    				
    				$window.alert("El cliente ha sido actualizado");
    				
    				$window.location.href="/customers/";
    				
            		$http.put("/api/customers/" + $routeParams.id, $scope.customer).then(
            				function(response) {
            					console.log("OK Response:", response);
            				},
            				function(response) {
            					console.log("KO Response:", response);
            				}
            		);	
        		}

        		
        	};            
        	
        	
        	$scope.save = function(){
        		if (window.confirm("Desea insertar un nuevo cliente?")){
        			
    				console.log("Insertando ", $scope.customer);
    				
    				$window.alert("El cliente ha sido añadido");
    				
    				$window.location.href="/customers/";

            		$http.post("/api/customers/new", $scope.customer).then(
            				function(response) {
            					console.log("OK Response:", response);
            					$scope.customer = response.data;
            				},
            				function(response) {
            					console.log("KO Response:", response);
            				}
            		);
        		}

        		

        		
        	}; 
        	

        	$scope.deleteCustomer = function(){
        		
        		if (window.confirm("Seguro que desea borrar este cliente? (También se borrarán las mascotas)")){
        			
    				console.log("Borrando ", $scope.customer);
    				
    				$window.alert("El cliente ha sido borrado");
    				
    				$window.location.href="/customers/";
    				
    				$http.delete("/api/customers/" + url[2], $scope.customer).then(
    						function(response){
            					console.log("KO Response:", response);

            				},
            				function(response) {
            					console.log("OK Response:", response);
            				}
            		);
        		}

        		
        	};   
        	
        	
        }
    });

    