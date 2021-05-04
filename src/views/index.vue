<template>
  <el-container>
    <el-header style="height: auto">
      <transition
        enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutLeft"
      >
        <blog-header v-show="headerShow"></blog-header>
      </transition>
    </el-header>
    <el-container>
      <el-aside style="width: auto;">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"
          ><blog-aside v-show="headerShow"></blog-aside> </transition
      ></el-aside>
      <el-container>
        <el-main>
          <transition
                  enter-active-class="animate__animated animate__bounceInLeft">
              <router-view style="background-color: #fff;padding: 10px 10px 10px 10px"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  components: {
    "blog-header": () => import("@/components/blogHeader"),
    "blog-aside": () => import("@/components/blogAside")
  },
  data() {
    return {
      headerShow: false
    };
  },
  created() {
    setTimeout(() => {
      this.headerShow = !this.headerShow;
    }, 200);
  }
};
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  overflow: hidden;
}
.el-container {
  background-color: #eff1f5;
}
.el-header {
  background-color: #fffffd;
  color: #4c82ff;
  border-bottom: 1px solid #ccc;
}
.el-main {
  padding: 10px;
  div {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
