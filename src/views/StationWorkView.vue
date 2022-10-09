<script>
import { useRoute } from "vue-router";
import store from "../store";
import station from "../components/stationWork/Station.vue";

export default {
  data() {
    return {
      station: null,
    };
  },
  components: { station },
  mounted() {
    //store.commit("stationWork/clear");
    const route = useRoute();
    this.station = route.params.type;
    store.dispatch("stationWork/fetchItems", this.station);
    store.commit("stationWork/setStation", this.station);
  },
};
</script>
<template>
  <div class="stationWork">
    <h2>{{ station }} station</h2>
    <station />
  </div>
</template>
<style scoped>
.stationWork {
  width: 100vw;
  height: 100vh;
  background: #404040;
  color: #e9e9e9;
  padding: 1em;
}

h2 {
  margin-bottom: 1em;
}
</style>
