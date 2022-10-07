<script>
export default {
  props: ["order"],
};
</script>
<template>
  <div class="orderTile">
    <h1>{{ order }}</h1>
  </div>
</template>
<style scoped>
.orderTile {
  display: grid;
  place-items: center;
  background: rgb(0, 125, 0);
  border-radius: 8px;
  color: #fff;
}

h1 {
  font-size: 2rem;
}
</style>
