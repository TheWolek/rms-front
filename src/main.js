import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";

import store from "./store";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueCookies, { expires: "1h" });
app.use(store);

app.mount("#app");
