<template>
  <div id="app" v-cloak>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="less" scoped="scoped">
#app {
  height: 100%;
  width: 100%;
}
</style>
