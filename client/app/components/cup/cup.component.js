import template from './cup.html';
import controller from './cup.controller';
import './cup.styl';

let cupComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default cupComponent;
