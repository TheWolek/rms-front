<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div class="emptyBasketMsg">
    <h1>Koszyk jest pusty</h1>
    <button @click="redirectToHome">Dodaj produkty</button>
  </div>
</template>
<style scoped>
.emptyBasketMsg {
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
}

h1 {
  text-align: center;
  font-size: 1.5rem;
}

button {
  width: 80%;
  padding: 0.8em;
  font-size: 0.9rem;
  background: rgb(0, 125, 0);
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 768px) {
  button {
    width: 60%;
  }
}

@media (min-width: 1400px) {
  button {
    width: 50%;
  }
}
</style>
