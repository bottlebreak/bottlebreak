import angular from 'angular';
import Home from './home/home';
import Maps from './maps/maps';
let componentModule = angular.module('app.components', [
  Home,
  Maps
])

.name;

export default componentModule;
