<!--
 * @Author: liangmin
 * @Date: 2022-08-05 15:31:24
 * @FilePath: \boll-pjOne\src\layout\Layout.vue
 * @Description: 菜单框架页
-->
<template>
  <div class="layout-template">
    <nav-menu></nav-menu>
    <app-main></app-main>
  </div>
</template>

<script>
import NavMenu from "./navMenu/NavMenu"
import AppMain from "./appMain/AppMain"
export default {
  name:'Layout',
  components: {
    NavMenu,
    AppMain
  },
  mounted () {
    console.log('这是layout框')
  },
  beforeDestroy () {
    console.log('这是layout框 即将摧毁')
  }
}
</script>

<style lang='stylus' scoped>
.layout-template
  display flex
  width 100%
  height 100%
  overflow hidden
  >>>.navMenu
    width 200px
  >>>.appMain
    flex 1
</style>