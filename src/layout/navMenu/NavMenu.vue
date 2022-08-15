<!--
 * @Author: liangmin
 * @Date: 2022-08-05 15:34:13
 * @FilePath: \boll-pjOne\src\layout\navMenu\NavMenu.vue
 * @Description: 导航菜单
-->
<template>
  <el-menu
    default-active="2"
    class="navMenu"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu :index="firstItem.name" v-for="firstItem in menuList" :key="firstItem.name">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{firstItem.lable}}</span>
      </template>
      <template v-if="firstItem.children"></template>
      <el-menu-item :index="secondItem.name" v-for="secondItem in firstItem.children" :key="secondItem.name" @click="switchRouter(secondItem)">{{secondItem.lable}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import menuList from '../menuList.js'
export default {
  name: 'NavMenu',
  data () {
    return {
      menuList
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath, 'open')
    },
    /**
     * @name: liangmin
     * @introduction: [序言]
     * @description: 收起菜单的回调
     * @return {*}
     * @exception: [违例类型] [违例类型说明]
     */
    handleClose (key, keyPath) {
      console.log(key, keyPath, '收起')
    },
    switchRouter (item) {
      this.$router.push({ path: item.path})
    }
  }
}
</script>

<style>

</style>