<script>
import { mapState } from "vuex";
import router from "../../router";
import store from "../../store";

export default {
  computed: {
    ...mapState({
      basketItem: (state) => state.shop.modalAddToBasket_item,
    }),
  },
  methods: {
    goToBasket() {
      store.commit("shop/toggleModal_AddToBasket", {
        item: {},
        newState: false,
      });
      router.push("/basket");
    },
    closeModal() {
      store.commit("shop/toggleModal_AddToBasket", {
        item: {},
        newState: false,
      });
    },
  },
};
</script>
<template>
  <div class="modalBg">
    <div class="modal" id="modal_addToBasket">
      <div class="header"><h2>Dodaj produkt do koszyka</h2></div>
      <div class="content">
        <div class="item">
          <div class="imgWrap"></div>
          <div class="details">
            <div class="name">{{ basketItem.displayName }}</div>
            <div class="price">{{ basketItem.price }} zł</div>
          </div>
        </div>
      </div>
      <div class="bottomBar">
        <div class="cancelBtn btn" @click="closeModal">Wróć do sklepu</div>
        <div class="goToBasketBtn btn" @click="goToBasket">
          Przejdź do koszyka
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modalBg {
  position: absolute;
  top: -10vh;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 101vh;
  background: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
}

.modal {
  background: rgb(236, 236, 236);
  width: 100vw;
  height: 100vh;
}

.header {
  background: rgb(199, 199, 199);
  padding: 1em 1.5em;
  height: 8vh;
}

.content {
  height: 84vh;
}

.bottomBar {
  height: 8vh;
  background: rgb(199, 199, 199);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em;
}

.goToBasketBtn {
  background: rgb(0, 125, 0);
  color: #fff;
}

.btn {
  padding: 0.5em;
}

.btn:hover {
  cursor: pointer;
}

.item {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3em;
}

.imgWrap {
  width: 75vw;
  height: 400px;
  background: #000;
}

.details {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}

.details .name {
  font-weight: 600;
  font-size: 1.1rem;
}

@media (min-width: 1024px) {
  .modal {
    width: 35%;
    height: 80vh;
  }

  .header {
    background: rgb(199, 199, 199);
    padding: 1em 1.5em;
  }

  .header h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .content {
    height: 80%;
  }

  .imgWrap {
    width: 100%;
    height: 400px;
  }

  .details .name {
    font-size: 1.2rem;
  }
}
</style>
