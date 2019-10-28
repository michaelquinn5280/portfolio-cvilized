﻿(function () {
    'use strict';

    angular.module('portfolioApp', [
        // Angular modules 
        'ngRoute',
        'ngResource',
        'ngAnimate',

        // Custom modules 
        'legalService',
        'profileService',
        'greetingService',
        'projectsService',
        'contactInfoService',
        'contactAttemptService',
        'siteInfoService',

        // 3rd Party Modules
        'ui.bootstrap',
        'easypiechart'
    ])
    .config(['$httpProvider', function ($httpProvider, $location) {
        $httpProvider.interceptors.push('portfolioHttpInterceptor');
    }])
    .factory('portfolioHttpInterceptor', ['$location', function ($location) {
        return {
            request: function (config) {

                if (config.url.match('api')) {
                    var apiRootUrl = 'https://cvservices.azurewebsites.net/';
                    var host = $location.host();
                    if (host == 'localhost') {
                        //apiRootUrl = 'http://localhost:3741/';
                        apiRootUrl = 'https://cvservices.azurewebsites.net/';
                    }
                    config.url = apiRootUrl + config.url;
                }
                return config;
            }
        };
    }]);
})();