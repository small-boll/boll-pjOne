<!--
 * @Author: liangmin
 * @Date: 2022-09-13 10:38:03
 * @FilePath: \boll-pjOne\src\components\cssBorder\CssBorder.vue
 * @Description: css边框
-->
<template>
  <div class="css-border">
    <div class="gradient-border">
      <!-- <span>gradient-border</span> -->
    </div>
    <section class="buttons">
      <button class="draw">Draw</button>
      <button class="draw meet">Draw Meet</button>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.css-border
  padding 10px
  .gradient-border
    --borderWidth 3px
    width 80px
    height 40px
    background #fff
    position relative
    border-radius var(--borderWidth)
    &::after
      content ''
      position absolute
      top calc(-1 * var(--borderWidth))
      left calc(-1 * var(--borderWidth))
      width calc(100% + 2 * var(--borderWidth))
      height calc(100% + 2 * var(--borderWidth))
      background linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)
      border-radius calc(2 * var(--borderWidth))
      z-index -1
      animation animatedgradient 3s ease alternate infinite
      background-size 300% 300%
      @keyframes animatedgradient {
        0% {
          background-position 0% 50%
        }
        50% {
          background-position 100% 50%
        }
        100% {
          background-position 0% 50%
        }
      }
  button
    background none
    border 0
    box-sizing border-box
    margin 2px
    padding 6px 12px
    box-shadow inset 0 0 0 2px red
    color red
    position relative
    &::before,
    &::after
      content ''
      position absolute
      width 100%
      height 100%
    &.draw
      transition color .25s
      &::before,
      &::after
        border 2px solid transparent
        width 0
        height 0
      &::before
        top 0
        left 0
      &::after
        bottom 0
        right 0
      &:hover
        color green
        &::before,
        &::after
          width 100%
          height 100%
        &::before
          border-top-color green
          border-right-color green
          transition width .25s ease-out, height .25s ease-out .25s
        &::after
          border-bottom-color green
          border-left-color green
          transition border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s
    &.meet
      &::after
        top 0
        left 0
      &:hover
        color yellow
        &::before
          border-top-color yellow
          border-right-color yellow
        &::after
          border-bottom-color yellow
          border-left-color yellow
          transition height .25s ease-out, width .25s ease-out .25s
</style>