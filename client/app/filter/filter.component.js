import angular from 'angular';
import escapeHtml from './escapeHtml.filter.js';

export default angular
  .module('app.filters', [])
  .filter({escapeHtml})
  .name;
