<script>
import { mapState } from "vuex";

export default {
  props: ["item"],
  computed: {
    ...mapState({
      dishes: (state) => state.shop.items,
    }),
    dish() {
      return this.dishes.find((o) => o.dishId === this.item);
    },
  },
};
</script>
<template>
  <div class="item">
    <div class="displayName">{{ dish.displayName }}</div>
    <div class="price">{{ dish.price }} zł</div>
  </div>
</template>
<style scoped>
.item {
  width: 100%;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 0.8em 2em;
  display: flex;
  justify-content: space-between;
}

.displayName {
  font-size: 1rem;
  text-transform: capitalize;
}

.price {
  font-weight: 600;
  font-size: 1rem;
}

@media (min-width: 768px) {
  .item {
    width: 80%;
  }
}
</style>
