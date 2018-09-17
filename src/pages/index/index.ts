import '@/assets/css/style.css'
import '@/assets/less/ss.less'

console.log("index");


import Vue from 'vue'
import App from '@/vues/hello.vue'
import { md5Utils } from '@/utils/md5Utils';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

new md5Utils().test();