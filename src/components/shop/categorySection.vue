<script>
import { mapState } from "vuex";

import item from "./item.vue";

export default {
  props: ["cat"],
  data() {
    return {
      id: this.cat.category_id,
      title: this.cat.category_displayName,
    };
  },
  mounted() {
    this.$watch("cat", (newVal) => {
      console.log("kurwaaa");
      if (newVal !== undefined) {
        this.id = this.cat.category_id;
        this.title = this.cat.category_displayName;
      }
    });
  },
  components: { item },
  computed: {
    ...mapState({
      selectedCategory: (state) => state.shop.selectedCategory,
      items(state) {
        return state.shop.items.filter((item) => item.category_id == this.id);
      },
    }),
  },
};
</script>
<template>
  <div class="categorySection">
    <h3>{{ title }}</h3>
    <div class="items">
      <item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<style scoped>
h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5em;
  letter-spacing: 0.05em;
}
.categorySection + .categorySection {
  margin-top: 1em;
}

.categorySection .items {
  display: grid;
  gap: 1em;
}

@media (min-width: 1024px) {
  .categorySection .items {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5em 1em;
  }
}
</style>
