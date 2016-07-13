import angular from 'angular';
import Navbar from './navbar/navbar';
import Location from './location/location';

let commonModule = angular.module('app.common', [
  Navbar,
  Location
])

.name;

export default commonModule;
