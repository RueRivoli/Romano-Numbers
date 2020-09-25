import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { Form, FormItem, Button, Input, Col, Row, Loading } from 'element-ui'
import "./style/element-variables.scss";

Vue.config.productionTip = false

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Input)
Vue.use(Col)
Vue.use(Row)
Vue.use(Loading)

Vue.use(axios);

new Vue({
  render: h => h(App),
}).$mount('#app')
