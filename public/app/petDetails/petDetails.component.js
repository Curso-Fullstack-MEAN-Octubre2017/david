'use strict';

angular.module('customerDetailsModule', []);

angular.module('customerDetailsModule')
    .component('customerDetailsModule', {
        templateUrl:'/app/customerDetails/customerDetails.html',
        controller: function($scope, $http, $routeParams) {
            console.log("Incializando petDetails", $routeParams.id);
            

            $scope.pet = {};
           
        	var response = {};
        		
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
        	
      
        	

        	
        	
        	
        }
    });
