'use strict';

angular.module('petStore')
.config(function(
    $locationProvider,
    $routeProvider
){
    $locationProvider.html5Mode({ enabled: true });
    $routeProvider
        .when("/",{
            template: "Acceder a los clientes: <a ng-href='customers'>Listado de clientes</a>"
        })
        .when("/customers",{
            template: "<sample-module></sample-module>"
        })

        .when("/customer",{
            templateUrl: "./app/sample-module/customer.html"
        })

        .otherwise({
            template: "<h1>Not Found</h1>"
        });
});