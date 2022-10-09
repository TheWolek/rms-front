<script>
import activeOrders from "../components/activeOrders/ActiveOrders.vue";
import store from "../store";

export default {
  components: { activeOrders },
};
</script>
<template>
  <div class="orders">
    <div class="header">
      <img src="@/assets/logo.svg" alt="logo" />
      <h1>Zamówienia</h1>
    </div>
    <activeOrders />
  </div>
</template>
<style scoped>
.orders {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgb(240, 255, 237);
}

.header {
  width: 100%;
  height: 10vh;
  background: rgb(178, 245, 164);
  padding: 1em;
  display: flex;
  align-items: center;
}

.header img {
  height: 6vh;
}

.header h1 {
  font-size: 1.7rem;
  text-align: center;
  width: 100%;
}
</style>
