<script>
import { mapState } from "vuex";

import item from "./item.vue";

export default {
  components: { item },
  computed: {
    ...mapState({
      basketItems: (state) => state.shop.basket,
    }),
  },
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div class="items">
    <div class="itemsList">
      <item
        v-for="(item, index) in basketItems"
        :key="index"
        :item="item"
        :itemIndex="index"
      />
    </div>
    <div v-if="basketItems.length === 0" class="emptyBasketMsg">
      <h1>Koszyk jest pusty</h1>
      <button @click="redirectToHome">Dodaj produkty</button>
    </div>
  </div>
</template>
<style scoped>
.item + .item {
  margin-top: 1em;
}

.items {
  width: 100%;
}

.emptyBasketMsg {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 1.5rem;
}

.items button {
  width: 50%;
  padding: 0.8em;
  font-size: 0.9rem;
  background: rgb(0, 125, 0);
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  .itemsList {
    padding: 0 1em;
  }
}

@media (min-width: 1024px) {
  .items {
    width: 60%;
  }
}
</style>
