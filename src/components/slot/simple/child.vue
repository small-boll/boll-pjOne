<template>
  <div class="box">
    我是孩子
    <slot />
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
