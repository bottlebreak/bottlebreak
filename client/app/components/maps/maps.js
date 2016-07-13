import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mapsComponent from './maps.component';
import Common from '../../common/common';
let mapsModule = angular.module('maps', [
  uiRouter,
  Common
])

.component('maps', mapsComponent)

.name;

export default mapsModule;
