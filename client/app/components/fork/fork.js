import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forkComponent from './fork.component';
import forkService from './fork.service';
let forkModule = angular.module('fork', [
  uiRouter
]).service('forkService', forkService)
    .config(($stateProvider) => {
      "ngInject";
      $stateProvider
          .state('fork', {
            url: '/fork',
            template: '<fork></fork>'
});
})
.component('fork', forkComponent);

export default forkModule;
