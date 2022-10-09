<script>
import { mapState } from "vuex";

import orderBox from "../components/shop/basket/orderBox.vue";
import itemsList from "../components/shop/basket/itemsList.vue";
import TYP from "../components/shop/basket/TYP.vue";
import emptyBasket from "../components/shop/basket/emptyBasket.vue";

export default {
  components: { orderBox, itemsList, TYP, emptyBasket },
  computed: {
    ...mapState({
      basketItems: (state) => state.shop.basket,
      TYP_isActive: (state) => state.shop.TYP_isAcitve,
    }),
  },
};
</script>
<template>
  <div class="basket">
    <TYP v-if="TYP_isActive" />
    <h2 v-if="!TYP_isActive">
      Koszyk
      <span>{{
        basketItems.length !== 0 ? `(${basketItems.length})` : null
      }}</span>
    </h2>
    <emptyBasket v-if="basketItems.length === 0 && !TYP_isActive" />
    <div class="wrapp" v-if="!TYP_isActive">
      <itemsList />
      <orderBox v-if="basketItems.length !== 0" />
    </div>
  </div>
</template>
<style scoped>
h2 {
  padding: 0.2em 0.5em;
}

.wrapp {
  margin-top: 1em;
}

.basket {
  margin: 0 auto;
}

@media (min-width: 768px) {
  .basket {
    padding: 0.5em 1.5em;
  }
}

@media (min-width: 1024px) {
  .wrapp {
    display: flex;
    justify-content: space-between;
  }

  .basket {
    width: 85%;
  }
}

@media (min-width: 1400px) {
  .basket {
    width: 75%;
  }
}
</style>
