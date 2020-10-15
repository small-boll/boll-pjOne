<template>
  <div class="box">
    <slot name="first" />

    我是孩子
    <slot name="second" />
  </div>
</template>

<script>
export default {
  name: "childHasName",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
