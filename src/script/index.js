import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import '../assets/style/index.scss';


const app = angular.module('demo-app', [uirouter]);

/**
 * 应用模块加载
 */
const modules = require.context('./../script', true, /\.module.index.js$/);
modules.keys().forEach(modules);

/**
 * 公共组件加载
 */
let components = require.context('./../script/components/', true, /\.index.js$/);
console.log(components.keys());
components.keys().forEach(components);