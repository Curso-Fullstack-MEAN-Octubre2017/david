'use strict';

angular.module('petStore')
.config(function(
    $locationProvider,
    $routeProvider
){
    $locationProvider.html5Mode({ enabled: true });
    $routeProvider
        .when("/",{
            templateUrl: "app/home.html"
        })
        .when("/customers",{
            template: "<customers-module></customers-module>"
        })
        .when("/customers/search/:dni",{
            template: "<customers-module></customers-module>"
        })
        .when("/customers/:id",{
            template: "<customer-details-module></customer-details-module>"
        })
        
        .when("/customers/:id/pets/:idPet",{
            template: "<pet-details-module></pet-details-module>"
        })
        .when("/customers/:id/pets/new",{
            template: "<pet-details-module></pet-details-module>"
        })

        .otherwise({
            template: "<h1>Not Found</h1>"
        });
});