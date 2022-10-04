<script>
import { mapState } from "vuex";
import store from "../../store";

export default {
  props: ["item"],
  methods: {
    addToBasket() {
      store.commit("shop/toggleModal_AddToBasket", {
        item: this.item,
        newState: true,
      });
    },
  },
};
</script>
<template>
  <div class="itemTile" id="item.id" @click="addToBasket">
    <div class="imgWrap"></div>
    <div class="details">
      <div class="name">{{ item.displayName }}</div>
      <div class="basketData">
        <div class="price">{{ item.price }} zł</div>
        <div class="basket">
          <img src="@/assets/cart.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.itemTile {
  display: flex;
  padding: 1em;
  background: #f1f1f1;
  transition: background-color 0.2s ease-out;
}

.itemTile:hover {
  cursor: pointer;
}

.itemTile + .itemTile {
  margin-top: 0.5em;
}

.itemTile .imgWrap {
  width: 30%;
}

.itemTile .details {
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 1em;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
}

.itemTile .basketData {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  widows: 85%;
}

.itemTile .name {
  font-weight: 600;
}

.itemTile .basket img {
  width: 1.5em;
}

.itemTile:hover {
  cursor: pointer;
  background: #e9e9e9;
}

@media (min-width: 1024px) {
  .itemTile + .itemTile {
    margin-top: 0;
    margin-left: 1em;
  }

  .itemTile:nth-child(4n + 1) {
    margin: 0;
  }

  .itemTile {
    width: 22vw;
    height: 100px;
  }

  .itemTile .details {
    justify-content: space-between;
  }
}
</style>
