<script>
export default {
  props: ["data"],
};
</script>
<template>
  <div class="workItem">
    {{ data }}
  </div>
</template>
<style scoped>
.workItem {
  background: #d6d6d6;
  color: var(--color-text);
  padding: 1.5em;
  cursor: pointer;
}
</style>
