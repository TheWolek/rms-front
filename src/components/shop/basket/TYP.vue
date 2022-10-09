<script>
import { mapState } from "vuex";

import typItem from "./TypItem.vue";

export default {
  components: { typItem },
  computed: {
    ...mapState({
      TYPData: (state) => state.shop.TYPData,
    }),
  },
};
</script>
<template>
  <div class="typ">
    <h1>Dziękujemy za złożenie zamówienia</h1>
    <div class="orderDetails">
      <div class="orderId">
        Twój numer zamówienia:
        <span>{{ TYPData.displayOrderId }}</span>
      </div>
      <div class="itemList">
        <typItem v-for="item in this.TYPData.items" :key="item" :item="item" />
      </div>
      <div class="totalPrice">
        <div>Łączna kwota</div>
        <div>{{ TYPData.totalPrice }} zł</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.typ {
  padding: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
h1 {
  font-size: 1.5rem;
  text-align: center;
}
.orderDetails {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
}

.orderId {
  text-align: center;
  font-weight: 500;
}

.orderId span {
  display: block;
  font-weight: 700;
  font-size: 3rem;
  color: #18222c;
}

.itemList {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8em;
  border-bottom: 1px solid #000;
  padding-bottom: 2em;
}

.totalPrice {
  padding: 0 4.2em;
  display: flex;
  justify-content: space-between;
  font-size: 0.98rem;
}

.totalPrice div:nth-child(2) {
  font-weight: 600;
}

@media (min-width: 768px) {
  .orderDetails {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .orderDetails {
    width: 60%;
  }
}
</style>
