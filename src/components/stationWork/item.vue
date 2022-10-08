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
      if (this.station === "collect") {
        let inProg = false;
        for (let i = 0; i < this.data.items.length; i++) {
          const item = this.data.items[i];
          if (item.dishStatus === "inProg") inProg = true;
        }
        return inProg;
      } else {
        if (this.data.dishStatus === "inProg") return true;
        return false;
      }
    },
    OrderIsReady() {
      if (this.station === "collect") {
        let ready = false;
        for (let i = 0; i < this.data.items.length; i++) {
          const item = this.data.items[i];
          if (item.dishStatus === "done") ready = true;
          else ready = false;
        }

        return ready;
      }
    },
    OrderInProgress() {},
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
    :class="{ inProg: inProgress, ready: OrderIsReady }"
  >
    <div v-if="this.station !== 'collect'">
      <h5>{{ data.dishStatus }}</h5>
      <h3>{{ data.displayName }}</h3>
    </div>
    <div v-if="this.station === 'collect'">
      <h3>
        Zamówienie: <span class="bold">{{ data.displayOrderId }}</span>
      </h3>
      <h4>{{ data.takeAway ? "Na wynos" : "Na miejscu" }}</h4>
      <ul class="itemList">
        <li v-for="item in data.items">
          <h5>{{ item.dishStatus }}</h5>
          <h3>{{ item.displayName }}</h3>
        </li>
      </ul>
    </div>
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

.ready {
  background: rgb(138, 245, 155);
}

h3 {
  font-size: 1.04rem;
}

h4 {
  font-size: 0.85rem;
  font-weight: normal;
}

span.bold {
  font-weight: 700;
}

ul {
  list-style: none;
  padding: 0.5em 0 0 0;
  border-top: 1px solid #000;
  margin-top: 0.5em;
}
</style>
