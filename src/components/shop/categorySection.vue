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
          (item) => item.category_id == this.cat.id
        );
      },
    }),
  },
};
</script>
<template>
  <div class="categorySection">
    {{ cat }}
    <item v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
<style scoped></style>
