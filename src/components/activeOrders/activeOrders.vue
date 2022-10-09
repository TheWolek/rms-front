<script>
import { mapState } from "vuex";
import store from "../../store";
import order from "./order.vue";

export default {
  components: { order },
  computed: {
    ...mapState({
      ordersInProgress: (state) => state.activeOrders.ordersInProgress,
      ordersDone: (state) => state.activeOrders.ordersDone,
    }),
  },
  mounted() {
    store.dispatch("activeOrders/fetchOrders");
    const interval = setInterval(() => {
      store.dispatch("activeOrders/fetchOrders");
    }, 5000);
  },
};
</script>
<template>
  <div class="activeOrdersList">
    <div class="inProgress">
      <h3>W przygotowaniu:</h3>
      <div class="orders">
        <order
          v-for="order in ordersInProgress"
          :key="order.orderId"
          :order="order.displayOrderId"
        />
      </div>
    </div>
    <div class="ready">
      <h3>Do odebrania:</h3>
      <div class="orders">
        <order
          v-for="order in ordersDone"
          :key="order.id"
          :order="order.displayOrderId"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.activeOrdersList {
  display: flex;
  width: 100%;
  padding-top: 1em;
}

.inProgress,
.ready {
  width: 50%;
  padding: 0.5em 1em;
  height: 86vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inProgress {
  border-right: 1px solid #000;
}

h3 {
  text-align: center;
}

.orders {
  display: grid;
  grid-template-columns: 80px 80px 80px 80px;
  padding-top: 2em;
  gap: 1.5em 0.5em;
}
</style>
