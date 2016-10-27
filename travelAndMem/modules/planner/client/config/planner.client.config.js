/**
 * Created by aayang on 10/26/16.
 */

'use strict';
// Configuring the Planner module
angular.module('planner').run(['Menus',
    function (Menus) {
        // Add the articles dropdown item
        Menus.addMenuItem('topbar', {
            title: 'Travel Planner',
            state: 'planner.view'
        });
    }
]);
