import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { Form, FormItem, Button, Input, Col, Row } from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
// import 'element-ui/lib/theme-chalk/index.css';
import "./style/element-variables.scss";

Vue.config.productionTip = false

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Col)
Vue.use(Row)

Vue.use(axios);
// Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(App),
}).$mount('#app')
