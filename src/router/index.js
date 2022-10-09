import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import BasketView from "../views/BasketView.vue";
import StationWorkView from "../views/StationWorkView.vue";
import ActiveOrdersView from "../views/ActiveOrdersView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        {
          path: "/",
          name: "shop",
          component: ShopView,
        },
        {
          path: "/basket",
          name: "basket",
          component: BasketView,
        },
      ],
    },
    {
      path: "/stationwork/:type",
      name: "stationWork",
      component: StationWorkView,
    },
    {
      path: "/orders/active",
      name: "activeOrders",
      component: ActiveOrdersView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
    },
  ],
});

export default router;
