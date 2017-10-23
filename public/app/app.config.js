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
            template: "<customers-module></customers-module>"
        })
        .when("/customers/:id",{
            template: "<customer-details-module></customer-details-module>"
        })
        
        .when("/customers/:id/pets/:id",{
            templateUrl: "/app/petDetails/petDetails.html"
        })

        .otherwise({
            template: "<h1>Not Found</h1>"
        });
});