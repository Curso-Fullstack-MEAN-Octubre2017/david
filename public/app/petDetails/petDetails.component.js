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
        	
            $scope.pet = {};
           
        	var response = {};
        	
            $http.get("/api/customers/" + url[2] + "/pets/" + url[4]).then(function(response){


            	$scope.pet = response.data;
            	console.log("probandoooooooooooooo", $scope.pet);


            });
            
            
    		var response = {};
    		
    		
    		
    		$http.put("/api/pets/" + $routeParams.id + 'pets', $scope.pet).then(
    				function(response) {
    					console.log("OK Response:", response);
    				},
    				function(response) {
    					console.log("KO Response:", response);
    				}
    		);
        	
        	/*
        	router.get('/customers/:id/pets/:idPet', function(req, res, next) {
        		//owner : "59e878351592760b9cdb7114"
        		//name : "animal"
        		var idPet = req.params.idPet;
        				Pet.findById(idPet,(err, pet) => {
        					
        					if (err) {
        						console.error(err);


        					} else {

        						res.json(pet);



        					}
        				});
        			});	           
        	*/
      
        	

        	
        	
        	
        }
    });
