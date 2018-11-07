import Vue from 'vue';
import Dummy from './Dummy.vue';

export default {
  initNuxt: () => {
    Vue.component('nuxt', Dummy);
    Vue.component('nuxt-child', Dummy);
    Vue.component('nuxt-link', Dummy);
    Vue.component('no-ssr', Dummy);
  }
}

