import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faInstagram, faFacebookSquare, faShoppingCart);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

new Vue({
  render: h => h(App),
}).$mount('#app');
