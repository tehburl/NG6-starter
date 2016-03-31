import angular from 'angular';
import Home from './home/home';
import Cup from './cup/cup';
import Fork from './fork/fork';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Cup.name,
  Fork.name,
]);

export default componentModule;
