'use strict';

angular.module('customersModule', []);

angular.module('customersModule')
    .component('customersModule', {
        templateUrl:'/app/customers-module/customers-module.html',
        controller: function($scope, $http, $window) {
        	
        	
            console.log("Incializando customer-module")
            
            $http.get("/api/customers").then(function(response){
            	
            	console.log(response.data);
            	
            	$scope.customers = response.data;
            	
            });
            
            $scope.myFunc = function() {
            	$window.alert("hiii");
            	console.log("tryiiinng");
            };


            
            
        }
    });

    