import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import scss from '../assets/style/index.scss';

console.log(scss);

import aboutTemplate from './pages/about_view/about.view.html';
import aboutCtrl from './pages/about_view/about.controller.js';
import listTemplate from './pages/list_view/list.view.html';
import listCtrl from './pages/list_view/list.controller.js';

import navDirective from './components/nav/nav.directive.js';
import headerDirective from './components/header/header.directive.js';

const app = angular.module('demo-app', [uirouter])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        
        $urlRouterProvider.otherwise('/list');

        $stateProvider.state('about', {
            url: '/about',
            templateUrl: aboutTemplate,
            controller: aboutCtrl,
            controllerAs: 'vm'
        });

        $stateProvider.state('list', {
            url: '/list',
            templateUrl: listTemplate,
            controller: listCtrl,
            controllerAs: 'vm'
        })
    }])
    .directive('demoNav', navDirective.factory)
    .directive('demoHeader', headerDirective.factory);
