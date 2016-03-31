import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';
import <%= name %>Service from './<%= name %>.service';
let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
]).service('<%= name %>Service', <%= name %>Service)
    .config(($stateProvider) => {
      "ngInject";
      $stateProvider
          .state('<%= name %>', {
            url: '/<%= name %>',
            template: '<<%= name %>></<%= name %>>'
});
})
.component('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
