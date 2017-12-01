<template>
  <div id="app">
    <commonVue></commonVue>
  </div>
</template>

<script>
  import commonVue from 'components/common/common'

  export default {
    name: 'app',
    components: {
      commonVue
    }

  }
</script>

<style scoped>

  #app {
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
