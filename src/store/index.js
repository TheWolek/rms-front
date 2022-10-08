import { createStore } from "vuex";
import shop from "./modules/shop";
import activeOrders from "./modules/activeOrders";
import stationWork from "./modules/stationWork";

export default createStore({
  modules: {
    shop,
    activeOrders,
    stationWork,
  },
});
