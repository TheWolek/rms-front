<script>
import { useRoute } from "vue-router";
import store from "../store";
import station from "../components/stationWork/station.vue";

export default {
  data() {
    return {
      station: null,
    };
  },
  components: { station },
  mounted() {
    const route = useRoute();
    this.station = route.params.type;
    store.dispatch("stationWork/fetchItems", this.station);
  },
};
</script>
<template>
  <div class="stationWork">
    {{ station }}
    <station />
  </div>
</template>
<style></style>
