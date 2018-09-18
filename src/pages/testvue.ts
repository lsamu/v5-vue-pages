import Vue from 'vue'
//import App from './App.vue'

Vue.config.productionTip = false

let v = new Vue({
  data:{
    title:"提交"
  },
  //render: h => h(App)
}).$mount('#app');


