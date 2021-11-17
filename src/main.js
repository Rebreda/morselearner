import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as Tone from "tone";
import './registerServiceWorker'
import router from './router';

Vue.config.productionTip = false
Vue.prototype.$Tone = Tone;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
