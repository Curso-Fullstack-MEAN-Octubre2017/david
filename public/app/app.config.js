'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                template: "Acceder a los clientes: <a ng-href='sample'>Listado de clientes</a>"
            })
            .when("/sample",{
                template: "<sample-module></sample-module>"
            })
            .otherwise({
                template: "Other"
            });
    });