import { Component, Vue, Prop } from 'vue-property-decorator';
import App from './App.vue'
import { packageApi } from '@/api/packageApi';

Vue.config.productionTip = false

@Component({
  components: {
  }
})
export default class TestVue extends Vue {
  title = "确定"
  message="";
  public mounted(){
    this.title="我是确定按钮";
    let list = new packageApi().getList();
    console.log(list);
  }
}

// let v = new Vue({
//   data:{
//     title:"我是提交按钮"
//   },
//   el:"#app"
// });

new TestVue({
  el: "#app",
  
  //render:(h)=>h(App)
});