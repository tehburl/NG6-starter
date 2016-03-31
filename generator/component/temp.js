import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';
import <%= name %>Service from './<%= name %>.service';
let <%= name %>Module = angular.module('<%= name %>', [
  uiRouter
]).service('<%= name %>Service', <%= name %>Service)

.component('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
