<script>
import { mapState } from "vuex";

import item from "./item.vue";

export default {
  components: { item },
  computed: {
    ...mapState({
      items: (state) => state.stationWork.stationWorkItems,
    }),
  },
};
</script>
<template>
  <div class="station">
    <item v-for="item in items" :key="item.id" :data="item" />
  </div>
</template>
<style scoped></style>
