<script>
import { mapState } from "vuex";

import item from "./item.vue";

export default {
  props: ["cat"],
  components: { item },
  computed: {
    ...mapState({
      items(state) {
        return state.shop.items.filter(
          (item) => item.category_id == this.cat.category_id
        );
      },
    }),
  },
};
</script>
<template>
  <div class="categorySection">
    <h3>{{ cat.category_displayName }}</h3>
    <div class="items">
      <item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<style scoped>
h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5em;
}
.categorySection + .categorySection {
  margin-top: 1em;
}

@media (min-width: 1024px) {
  .categorySection .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 2em;
  }
}
</style>
