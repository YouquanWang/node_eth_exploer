import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import web3 from 'web3'
import dateFormat from 'date-format';
const app = createApp(App);
app.config.globalProperties.web3 = web3;
app.config.globalProperties.dateFormat = dateFormat
app.use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
