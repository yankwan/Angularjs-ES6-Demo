import 'angular';
import '@uirouter/angularjs';

import scss from './../assets/style/index.scss';

import aboutTemplate from './pages/about_view/about.view.html';
import aboutCtrl from './pages/about_view/about.controller.js';
import listTemplate from './pages/list_view/list.view.html';
import listCtrl from './pages/list_view/list.controller.js';

import directive from './components/nav/nav.directive.js';

console.log(aboutTemplate);

const app = angular.module('demo-app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        
        $urlRouterProvider.otherwise('/list');

        $stateProvider.state('/about', {
            url: '/about',
            templateUrl: aboutTemplate,
            controller: aboutCtrl,
            controllerAs: 'cl'
        });

        $stateProvider.state('/list', {
            url: '/list',
            templateUrl: listTemplate,
            controller: listCtrl,
            controllerAs: 'cl'
        })
    }])
    .directive('demoNav', directive.factory);
