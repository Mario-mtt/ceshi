import Vue from 'vue'
import App from './App.vue'

//导入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

//引用axios
import axios from "axios"
Vue.prototype.axios = axios

//引用mock
require("./mock");

Vue.config.productionTip = false

//引入路由实例,并将路由实例挂载在vue实例上
import router from "./router"
new Vue({
  render: h => h(App),
  router

}).$mount('#app')
