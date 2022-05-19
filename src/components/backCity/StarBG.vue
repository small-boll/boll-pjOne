<!--
 * @Author: liangmin 649554709@qq.com
 * @Date: 2022-05-19 15:45:52
 * @FilePath: \boll-pjOne\src\components\backCity\StarBG.vue
 * @Description: [文件描述]
-->
<template>
  <div class="star-contain" id='starBG'>
  </div>
</template>

<script>
export default {
  name:'StarBG',
  data(){
    return {}
  },
  mounted(){
    this.addStar(document.getElementById('starBG'),document.getElementById('starBG').clientWidth / 50)
  },
  methods:{
    /**
     * @introduction: 使用js生成星星
     * @description: 使用js生成星星
     * @param: container  星星容器 num 星星数量
     * @return: {*}
     * @exception: [违例类型] [违例类型说明]
     */    
    addStar(container,num){
      for(let i = 0 ; i < num ; i++){
        let star = document.createElement('div')
        star.className = 'star'
        star.style.left = container.clientWidth * Math.random() + 'px'
        star.style.top = container.clientHeight * Math.random() + 'px'
        container.append(star)
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.star-contain{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
<style>
.star{
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #fd400a;
}
</style>