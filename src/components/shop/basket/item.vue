<script>
import store from "../../../store";

import bunddleItems from "./bunddleItems.vue";

export default {
  props: ["item", "itemIndex"],
  components: { bunddleItems },
  methods: {
    deleteItem() {
      store.commit("shop/removeItemFromBasket", this.itemIndex);
    },
    changeAmount() {
      store.commit("shop/setItemAmount", {
        itemIndex: this.itemIndex,
        newAmount: parseInt(this.item.count),
      });
    },
  },
};
</script>
<template>
  <div class="item">
    <div class="leftSide">
      <div class="imgWrap"></div>
      <div class="name">{{ item.displayName }}</div>
    </div>

    <div class="rightSide">
      <div class="count">
        <select v-model="this.item.count" @change="changeAmount">
          <option v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i">
            {{ i }}
          </option>
        </select>
      </div>
      <div class="price">{{ item.price }} zł</div>
      <div class="removeItem" @click="deleteItem">Usuń</div>
    </div>
    <ul class="bunddleItems">
      <bunddleItems
        v-for="bi in item.bunddleItems"
        :key="bi"
        class="bunddleItemName"
        :bi="bi"
      />
    </ul>
  </div>
</template>
<style scoped>
.item {
  width: 90%;
  border: 1px solid gray;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  justify-items: flex-start;
  align-items: center;
  padding: 1em;
  margin: 0 auto;
}

.imgWrap {
  width: 40px;
  height: 40px;
  background: #000;
}

.name {
  font-weight: 600;
  padding-left: 0.5em;
  width: 75%;
}

.bunddleItems {
  grid-column: 1/3;
  justify-self: flex-start;
  list-style: "-";
  margin-top: 0.4em;
}

.bunddleItemName {
  padding-left: 0.5em;
}

.leftSide,
.rightSide {
  display: flex;
  align-items: center;
}

.leftSide {
  width: 100%;
}

.removeItem {
  font-weight: 500;
  cursor: pointer;
  padding: 0.1em 0.3em;
}

.removeItem:hover {
  background: #eee;
}

.rightSide {
  gap: 0.8em;
  justify-self: flex-end;
}
@media (min-width: 1024px) {
  .item {
    width: 100%;
  }
  .name {
    width: auto;
  }
}
</style>
