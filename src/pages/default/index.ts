import '@/assets/css/style.css'
import '@/assets/less/ss.less'

console.log("index1231231212");


import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(HelloWorld)
}).$mount('#app')
