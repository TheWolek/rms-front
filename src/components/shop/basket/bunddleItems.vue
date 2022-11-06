<script>
import { mapState } from "vuex";

export default {
  props: ["bi"],
  computed: {
    ...mapState({
      items: (state) => state.shop.items,
    }),
    getItemDisplayName() {
      return this.items.find((i) => i.dishId === this.bi).displayName;
    },
  },
};
</script>
<template>
  <li>{{ getItemDisplayName }}</li>
</template>
<style scoped></style>
