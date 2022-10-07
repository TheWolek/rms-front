import { createStore } from "vuex";
import shop from "./modules/shop";
import activeOrders from "./modules/activeOrders";

export default createStore({
  modules: {
    shop,
    activeOrders,
  },
});
