<script>
import { mapState } from "vuex";
import store from "../../../store";

export default {
  data() {
    return {
      paymentMethod: 1,
      takeAway: false,
    };
  },
  computed: {
    ...mapState({
      basketItems: (state) => state.shop.basket,
      basketTotalValue: (state) => state.shop.basketTotalValue,
    }),
    formattedBasketTotalValue() {
      return this.basketTotalValue.toFixed(2);
    },
  },
  methods: {
    submitOrder() {
      store.dispatch("shop/submitOrder", {
        paymentMethod: this.paymentMethod,
        takeAway: this.takeAway,
      });
    },
  },
};
</script>
<template>
  <div class="orderBox">
    <div class="totalPrice">
      <div>Łączna Kwota:</div>
      <div>{{ formattedBasketTotalValue }} zł</div>
    </div>
    <form>
      <div class="form-group">
        <label for="paymentMethod">Metoda płatności</label>
        <select name="paymentMethod" id="paymentMethod" v-model="paymentMethod">
          <option :value="1">Gotówka</option>
          <option :value="2">Karta płatnicza</option>
        </select>
      </div>
      <div class="form-group">
        <label class="radio">
          <input
            type="radio"
            name="takeAway"
            v-model="takeAway"
            :value="false"
            checked="checked"
          />
          Na miejscu
        </label>
        <label class="radio">
          <input
            type="radio"
            name="takeAway"
            v-model="takeAway"
            :value="true"
          />
          Na wynos
        </label>
      </div>
      <div class="buyBtn" @click="submitOrder">Kupuję i płacę</div>
    </form>
  </div>
</template>
<style scoped>
.orderBox {
  margin-top: 1em;
  padding: 1em;
  background: rgb(214, 214, 214);
}

.totalPrice {
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  margin-bottom: 1.5em;
}

.totalPrice div:nth-child(2) {
  font-weight: 600;
}

.buyBtn {
  text-align: center;
  padding: 0.4em 0.5em;
  background: rgb(0, 125, 0);
  color: #fff;
  margin-top: 1em;
  cursor: pointer;
}

.form-group {
  display: flex;
  flex-direction: column;
}

select {
  padding: 0.5em;
}

.form-group + .form-group {
  margin-top: 1em;
}

@media (min-width: 1024px) {
  .orderBox {
    width: 40%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
