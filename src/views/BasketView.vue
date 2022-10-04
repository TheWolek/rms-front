<script>
import { mapState } from "vuex";

import basketItem from "../components/shop/basket/item.vue";

export default {
  components: { basketItem },
  computed: {
    ...mapState({
      basketItems: (state) => state.shop.basket,
    }),
  },
};
</script>
<template>
  <div class="basket">
    <h2>
      Koszyk
      <span>{{
        basketItems.length !== 0 ? `(${basketItems.length})` : null
      }}</span>
    </h2>
    <div class="wrapp">
      <div class="items">
        <basketItem
          v-for="item in basketItems"
          :key="item.dishId"
          :item="item"
        />
        <div v-if="basketItems.length === 0" class="emptyBasketMsg">
          Koszyk jest pusty
        </div>
      </div>
      <div class="orderBox" v-if="basketItems.length !== 0">
        <div class="totalPrice">
          <div>Łączna Kwota:</div>
          <div>100 zł</div>
        </div>
        <div class="buyBtn">Kupuję i płacę</div>
      </div>
    </div>
  </div>
</template>
<style>
h2 {
  padding: 0.2em 0.5em;
}

.wrapp {
  margin-top: 1em;
}

.orderBox {
  margin-top: 1em;
  padding: 1em;
  background: rgb(214, 214, 214);
}

.totalPrice {
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
}

.totalPrice div:nth-child(2) {
  font-weight: 600;
}

.buyBtn {
  text-align: center;
  padding: 0.4em 0.5em;
  background: rgb(0, 125, 0);
  color: #fff;
  margin-top: 1em;
  cursor: pointer;
}

.item + .item {
  margin-top: 1em;
}

@media (min-width: 1024px) {
  .wrapp {
    display: flex;
    justify-content: space-between;
  }

  .items {
    width: 50%;
    padding: 0 1em;
  }

  .orderBox {
    width: 40%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
