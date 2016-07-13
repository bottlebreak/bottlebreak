import angular from 'angular';
import LocationService from './location.service';

let locationModule = angular.module('location', [])

.service('Location', LocationService)

.name;

export default locationModule;
