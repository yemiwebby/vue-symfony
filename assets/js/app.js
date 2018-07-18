import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import Example from './components/Example'

import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
/**
 * Create a fresh Vue Application instance
 */
new Vue({
   el: '#app',
   components: {Example}
});