'use strict';

angular.module('petDetailsModule', []);

angular.module('petDetailsModule')
    .component('petDetailsModule', {
        templateUrl:'/app/petDetails/petDetails.html',
        controller: function($scope, $http, $routeParams, $location) {
            console.log("Incializando petDetails", $routeParams.id);
            
            var url = $location.path().split('/');
            
        	console.log(url[2]);
        	console.log(url[4]);
        	

            


           
        	var response = {};
        	
            $http.get("/api/customers/" + url[2] + "/pets/" + url[4]).then(function(response){


            	$scope.pet = response.data;


            });
            
            

    		
        	$scope.updatePet = function(){
        		
				console.log("Guardando ", $scope.pet);
				$http.put("/api/customers/" + url[2] + "/pets/" + url[4], $scope.pet).then(
						function(response){

        					console.log("OK Response:", response);
        				},
        				function(response) {
        					console.log("KO Response:", response);
        				}
        		);
        		
        	};    
        	
        	
        	
        	$scope.savePet = function(){


/*
        		$http.post("/api/customers/" + url[2] + "/pets", $scope.pet).then(
        				function(response) {
        					console.log("OK Response:", $scope.pet);

        				},
        				function(response) {
        					console.log("KO Response:", response);
        				}
        		)
        		
*/
  alert("No funciona...");      		
        		
        		};
    		

        	

      
        	

        	
        	
        	
        }
    });
