import "./main.scss";

import Vue from 'vue';

// global event bus
window.EventBus = new Vue();

// android system comunication
Vue.prototype.fileSystem = require('./lib/filesystem').default;

import App from './App';
new Vue({
  el: '#app',
  components: { App },
  'template': '<app/>',
  data: {}
})