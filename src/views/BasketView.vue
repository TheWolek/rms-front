<script>
import { mapState } from "vuex";

import orderBox from "../components/shop/basket/orderBox.vue";
import itemsList from "../components/shop/basket/itemsList.vue";
import store from "../store";

export default {
  components: { orderBox, itemsList },
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
      <itemsList />
      <orderBox v-if="basketItems.length !== 0" />
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
    padding: 0.5em 10em;
  }
}
</style>
