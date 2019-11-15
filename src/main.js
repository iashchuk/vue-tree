import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import store from "./store/store";
import routes from "./routes";
import "./assets/scss/main.scss";


Vue.use(VueRouter);
export const router = new VueRouter({ mode: "history", routes });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
