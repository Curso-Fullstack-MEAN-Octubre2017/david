'use strict';

angular.module('petDetailsModule', []);

angular.module('petDetailsModule')
    .component('petDetailsModule', {
        templateUrl:'/app/petDetails/petDetails.html',
        controller: function($scope, $http, $routeParams, $location,$window) {
            console.log("Incializando petDetails", $routeParams.id);
            

        	

            


           
        	var response = {};
        	
           $http.get("/api/customers/" + $routeParams.id + "/pets/" + $routeParams.idPet).then(function(response){

            	$scope.pet = response.data;

            });
            
            

    		
           $scope.updatePet = function(){
        	   
        		if (window.confirm("Desea actualizar esta mascota?")){
        			
    				console.log("Guardando ", $scope.pet);
    				
    				$window.alert("La mascota ha sido actualizada");
    				
    				$window.location.href="/customers/" + $routeParams.id;
    				
    				$http.put("/api/customers/" + $routeParams.id + "/pets/" + $routeParams.idPet, $scope.pet).then(
    						
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
    				
    				$window.location.href="/customers/" + $routeParams.id;
    				
            		$http.post("/api/customers/" + $routeParams.id + "/pets", $scope.pet).then(
            				
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
        				
        				$window.location.href="/customers/" + $routeParams.id;
        				
        				$http.delete("/api/customers/" + $routeParams.id + "/pets/" + $routeParams.idPet, $scope.pet).then(
        						
        						function(response){
        							
                					console.log("KO Response:", response);

                				},
                				
                				function(response) {
                					
                					console.log("OK Response:", response);
                					
                				}
                		);
            			
            		}
            		

            		
            	};   
            	
            	$scope.isNew = function() {
            		return true;
            	}
            	

            	/*Controlador del botón actualizar/insertar */
            	
            	var path = window.location.pathname;
            	
            	var split = path.split("/");

            	if (split[4] == "new"){

            	document.getElementById("uptton").style.display = "none";

            	} else{
            		
            	document.getElementById("newtton").style.display = "none";

            	}
            	
            	/*Controlador del botón actualizar/insertar */
        	
        	
        	
        }
    });
