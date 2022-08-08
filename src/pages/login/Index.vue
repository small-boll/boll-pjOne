<!--
 * @Author: liangmin
 * @Date: 2022-08-03 13:49:54
 * @FilePath: \boll-pjOne\src\pages\login\Index.vue
 * @Description: 登录页面
-->
<template>
  <div class="login-template">
    <video autoplay loop muted class="login-bg" src="@/assets/video/bg3.mp4"></video>
    <section class="lt-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <section class="submit-box">
        <el-button type="primary" @click="submitForm()">登   录</el-button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name:'login',
  data () {
    return {
      rules: {},
      ruleForm: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    /**
     * @name: liangmin
     * @introduction: [序言]
     * @description: 登录接口
     * @return {*}
     * @exception: 登录接口
     */
    submitForm () {
      if (!this.ruleForm.name) {
        this.$message.error('用户名不能为空！')
        return false
      }
      if (!this.ruleForm.password) {
        this.$message.error('密码不能为空！')
        return false
      }
      
      this.$router.push({ path: '/layout', replace: true })
    }
  }

}
</script>

<style scoped lang="stylus">
@import "~@/assets/style/login.styl"
</style>