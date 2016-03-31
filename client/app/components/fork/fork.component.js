import template from './fork.html';
import controller from './fork.controller';
import './fork.styl';

let forkComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default forkComponent;
