<!--  slot插槽（又称内容分发）  -->
<!--  混合父组件的内容与子组件子的模板->内容分发 -->
<!--  都组件模板的内容在父组件作用域内编辑；子组件模板的内容在子组件作用域内编译 -->
<!-- 具名插槽 -->
<template>
  <div class="box">
    <childHasName>
      <div slot="first">这是我再父亲那的新信息1:{{ msg1 }}</div>
      <div slot="second">这是我再父亲那的新信息2:{{ msg2 }}</div>
    </childHasName>
  </div>
</template>

<script>
import childHasName from "./childHasName.vue";
export default {
  name: "SlotMainHasName",
  components: {
    childHasName,
  },
  data() {
    return {
      msg1: "Hello ",
      msg2: "Welcome ",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
