<!-- 单个元素切换 -->
<template>
  <div>
    <button @click="isShow = !isShow">click</button>
    <transition name="content">
      <p v-show="isShow">11111</p>
    </transition>
    <transition name="animation">
      <p v-show="isShow">22222222</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: "transitionSingle",
  data() {
    return {
      isShow: false,
    };
  },
};
</script>
<style scoped>
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