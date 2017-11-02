'use strict';


/* Cambio de css en directo

var app = angular.module('app', []);

app.directive('parseStyle', function($interpolate) {
    return function(scope, elem) {
        var exp = $interpolate(elem.html()),
            watchFunc = function () { return exp(scope); };
        
        scope.$watch(watchFunc, function (html) {
            elem.html(html);
        });
    };
});

app.controller('ctrl', function($scope) {
    $scope.angular_variable = 'red';
});

   Cambio de css en directo */  




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
                    
            

        
            
            
            $scope.ref = function(id) {
            	
			$window.location.href="/customers/" + id;

            };
            
            
            $scope.$watchCollection('searching', function() {
            	var searchCriteria = {};
            	searchCriteria.searchTerm = $scope.searching;


                $http.get("/api/customers", {params: searchCriteria}).then(function(response){
                	
                	console.log(response.data);
                	
                	$scope.customers = response.data;
                	
                	});
                });
            

           
        }
    });

    