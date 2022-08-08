<!--
 * @Author: liangmin
 * @Date: 2022-08-08 14:47:05
 * @FilePath: \boll-pjOne\src\layout\appMain\AppMain.vue
 * @Description: 主界面
-->
<template>
  <section class="appMain">
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {}
  },
  mounted () {
    console.log('这个是appmain')
  },
  beforeDestroy () {
    console.log('这个是appmain 即将摧毁')
  }
}
</script>

<style>

</style>