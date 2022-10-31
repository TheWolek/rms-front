<script>
export default {
  methods: {
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <div @click="redirect" class="btn">&#60; Wróć do zakupów</div>
</template>
<style scoped>
.btn {
  background: #ebebeb;
  display: block;
  width: 85%;
  margin: 1em auto 0 auto;
  text-align: center;
  padding: 6px 16px;
  font-size: 14px;
  line-height: 20px;
  color: #1a1a1a;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
}

.btn:hover {
  background: #d9d9d9;
}

@media (min-width: 768px) {
  .btn {
    display: inline-block;
    width: 30%;
  }
}

@media (min-width: 1024px) {
  .btn {
    width: auto;
  }
}
</style>
