﻿(function () {
    'use strict';

    angular
        .module('portfolioApp')
        .controller('aboutSiteModalController', aboutSiteModalController);

    aboutSiteModalController.$inject = ['$scope', '$modal', '$sce'];

    function aboutSiteModalController($scope, $modal, $sce) {
        $scope.items = ['Mobile first responsive design',
                        'Bootstrap with CVilized wrapper',
                        'AngularJs',
                        '.NET Core',
            $sce.trustAsHtml('RESTful <a class="modal-link" href="http://cvservices.azurewebsites.net/help" target="_blank">Web API</a>'),
                        $sce.trustAsHtml('Queryable <a class="modal-link" href="http://cvgraphql.azurewebsites.net/" target="_blank">GraphQL</a> endpoint'),
                        'Application Insights',
                        'MongoLab data source',
                        $sce.trustAsHtml('Continuous Integration with <a class="modal-link" href="https://github.com/michaelquinn5280/portfolio-cvilized" target="_blank">GitHub</a> and Azure')];
        $scope.title = 'SUMMARY';
        $scope.link = '';
        $scope.animationsEnabled = true;

        $scope.open = function (size) {
            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'aboutSiteModalContent.html',
                controller: 'modalInstanceController',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    },
                    title: function () {
                        return $scope.title;
                    },
                    link: function () {
                        return $scope.link;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
    }
})();
