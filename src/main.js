import Vue from 'vue'
import App from '@/App.vue'
import http from "@/http";
import router from '@/router';
import { Button ,Spinner,InfiniteScroll} from 'mint-ui';
Vue.component(Button.name, Button)
Vue.component(Spinner.name, Spinner)
Vue.use(InfiniteScroll);
Vue.config.productionTip = false
Vue.prototype.$http=http;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')