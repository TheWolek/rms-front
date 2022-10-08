<script>
import { mapState } from "vuex";
import store from "../../store";

export default {
  props: ["data"],
  computed: {
    ...mapState({
      station: (state) => state.stationWork.station,
    }),
    inProgress() {
      if (this.data.dishStatus === "inProg") return true;
      return false;
    },
  },
  methods: {
    close() {
      if (
        this.data.dishStatus === "inProg" ||
        this.data.dishStatus === "rdyToPck"
      ) {
        let newStatus = "done";
        if (this.station === "grill") newStatus = "rdyToPck";
        store.dispatch("stationWork/changeItemStatus", {
          itemId: this.data.id,
          newStatus: newStatus,
        });
      }
    },
    inProg() {
      if (this.data.dishStatus === "new")
        store.dispatch("stationWork/changeItemStatus", {
          itemId: this.data.id,
          newStatus: "inProg",
        });
    },
  },
};
</script>
<template>
  <div
    class="workItem"
    v-on:dblclick="close"
    @click="inProg"
    :class="{ inProg: inProgress }"
  >
    <h5>{{ data.dishStatus }}</h5>
    <h3>{{ data.displayName }}</h3>
  </div>
</template>
<style scoped>
.workItem {
  background: #d6d6d6;
  color: var(--color-text);
  padding: 1.5em;
  cursor: pointer;
}

.inProg {
  background: rgb(250, 250, 77);
}
</style>
