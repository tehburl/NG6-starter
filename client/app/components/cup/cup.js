import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cupComponent from './cup.component';
import cupService from './cup.service';

let cupModule = angular.module('cup', [
  uiRouter
]).service('cupService', cupService)
    .config(($stateProvider) => {
      "ngInject";
      $stateProvider
          .state('cup', {
            url: '/cup',
            template: '<cup></cup>'
          });
    })
.component('cup', cupComponent);

export default cupModule;
