'use strict';

angular.module('customersModule', []);

angular.module('customersModule')
    .component('customersModule', {
        templateUrl:'/app/customers-module/customers-module.html',
        controller: function($scope, $http) {
            console.log("Incializando customer-module")
            
            $http.get("/api/customers").then(function(response){
            	console.log(response.data);
            	$scope.customers = response.data;
            });
        }
    });

    