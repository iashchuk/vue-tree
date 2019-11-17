import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import routes from "./routes";
import "./assets/scss/main.scss";

Vue.use(VueRouter);
export const router = new VueRouter({ mode: "history", routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
