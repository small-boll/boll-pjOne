<!--  slot插槽（又称内容分发）  -->
<!--  混合父组件的内容与子组件子的模板->内容分发 -->
<!--  都组件模板的内容在父组件作用域内编辑；子组件模板的内容在子组件作用域内编译 -->
<template>
  <div class="box">
    <child>
      <div>这是我再父亲那的新信息:{{ msg }}</div>
    </child>
  </div>
</template>

<script>
import child from "./child.vue";
export default {
  name: "slotMain",
  components: {
    child,
  },
  data() {
    return {
      msg: "Welcome ",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
