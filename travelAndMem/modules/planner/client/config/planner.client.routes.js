/**
 * Created by aayang on 10/26/16.
 */
'use strict';

angular.module('planner').config(['$stateProvider',
    function($stateProvider){
        $stateProvider
            .state('planner', {
                abstract: true,
                url: '/planner',
                template: '<ui-view/>',
                data: {
                    roles: ['user', 'admin']
                }
            })

            .state('planner.view', {
                url: '',
                templateUrl: 'modules/planner/view/planner-home.client.view.html'
            });
    }

]);
