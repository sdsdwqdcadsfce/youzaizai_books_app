<template>
  <div id="app">
<!--    展示路由中组件的内容-->
    <router-view></router-view>
  </div>
</template>


<script>
  export default {}
  // 设置rem自适应字体

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "assets/styles/global";
    #app {
        width: 100%;
        height: 100%;
        background: #7d8188;
        overflow: hidden;
    }

</style>