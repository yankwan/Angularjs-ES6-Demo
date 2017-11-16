import scss from './../assets/style/index.scss';

import aboutTemplate from './pages/about_view/about.view.html';
import aboutCtrl from './pages/about_view/about.controller.js';

import listTemplate from './pages/list_view/list.view.html';
import listCtrl from './pages/list_view/list.controller.js';

import uiRouter from '@uirouter/angularjs';

const app = angular.module('demo-app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        
        $urlRouterProvider.otherwise('/list');

        $stateProvider.state('/about', {
            url: '/about',
            template: '<p>about</p>',
            controller: aboutCtrl,
            controllerAs: 'cl'
        });

        $stateProvider.state('/list', {
            url: '/list',
            template: '<p>list</p>',
            controller: listCtrl,
            controllerAs: 'cl'
        })
    }])
