<!-- 多个组件的切换（n选1）过渡动画 -->
<template>
  <div class="box">
    <p>
      <button class="btn" @click="know = 'index'">首页</button>
      <button class="btn" @click="know = 'login'">登陆</button>
      <button class="btn" @click="know = 'register'">注册</button>
    </p>
    <div class="contain">
      <h1>这是内容啊</h1>
      <!-- mode="out-in"使得过渡动画更加流畅 -->
      <transition name="content" mode="out-in">
        <component :is="know"></component>
      </transition>
    </div>
  </div>
</template>
<script>
import login from "./login";
import register from "./register";
import index from "./index";
export default {
  name: "transitionMultiple",
  components: {
    login,
    register,
    index,
  },
  data() {
    return {
      isShow: false,
      know: "",
    };
  },
};
</script>
<style scoped>
.contain {
  background-color: rosybrown;
}
.content-enter-active,
.content-leave-active {
  transition: all 1.5s;
}
.content-enter,
.content-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.animation-enter-active {
  animation: bounce 3s;
}
.animation-leave-active {
  animation: bounce 3s reverse;
}
@keyframes bounce {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>