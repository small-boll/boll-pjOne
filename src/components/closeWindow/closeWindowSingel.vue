
<template>
  <div class="main">
    <button @click="showWindowFn">现弹窗</button>
    <el-dialog title="弹窗a" :visible.sync="showWindow">
      <div>
        <p>这是第一段文字</p>
        <p>这是第二段文字</p>
        <p>这是第三段文字</p>
        <p>这是第四段文字</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'closeWindowSingel',
  data(){
    return{
      showWindow:false,
    }
  },
  methods:{
    showWindowFn(){
      this.showWindow = !this.showWindow;
    },
  }
}
</script>

<style>

</style>