'use strict';

angular.module('petDetailsModule', []);

angular.module('petDetailsModule')
    .component('petDetailsModule', {
        templateUrl:'/app/petDetails/petDetails.html',
        controller: function($scope, $http, $routeParams, $location,$window) {
            console.log("Incializando petDetails", $routeParams.id);
            
            var url = $location.path().split('/');
            
        	console.log(url[2]);
        	console.log(url[4]);
        	

            


           
        	var response = {};
        	
            $http.get("/api/customers/" + url[2] + "/pets/" + url[4]).then(function(response){


            	$scope.pet = response.data;


            });
            
            

    		
        	$scope.updatePet = function(){
        		if (window.confirm("Desea actualizar esta mascota?")){
        			
    				console.log("Guardando ", $scope.pet);
    				
    				$window.alert("La mascota ha sido actualizada");
    				
    				$window.location.href="/customers/" + url[2];
    				
    				$http.put("/api/customers/" + url[2] + "/pets/" + url[4], $scope.pet).then(
    						function(response){

            					console.log("OK Response:", response);
            				},
            				function(response) {
            					console.log("KO Response:", response);
            				}
            		);
        		}

        		
        	};    
        	
        	
        	
        	$scope.savePet = function(){

        		if (window.confirm("Desea insertar una nueva mascota?")){
        			
    				console.log("Insertando ", $scope.pet);
    				
    				$window.alert("La mascota ha sido insertada");
    				
    				$window.location.href="/customers/" + url[2];
    				
            		$http.post("/api/customers/" + url[2] + "/pets", $scope.pet).then(
            				function(response) {
            					console.log("OK Response:", $scope.pet);

            				},
            				function(response) {
            					console.log("KO Response:", response);
            				}
            		)
        		}


        		
		
        		
        		};
    		

            	$scope.deletePet = function(){
            		
            		if (window.confirm("Seguro que desea borrar esta mascota?")){

        				console.log("Borrando ", $scope.pet);
        				
        				$window.alert("La mascota ha sido borrada");
        				
        				$window.location.href="/customers/" + url[2];
        				
        				$http.delete("/api/customers/" + url[2] + "/pets/" + url[4], $scope.pet).then(
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
