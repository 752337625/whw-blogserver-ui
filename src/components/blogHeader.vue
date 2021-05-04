<template>
  <el-row class="blog-header">
    <div class="blog-header-left">
      <h4>Blog后台管理系统</h4>
    </div>
    <div class="blog-header-center">
      <el-button :icon="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" style="border: 0" @click="modifyCollapse"></el-button>
    </div>
    <div class="blog-header-right">
      <el-avatar :src="circleUrl" style="margin: 5px 10px 0 0;"></el-avatar>
      <el-dropdown>
        <span class="el-dropdown-link">
         {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-user">个人信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-setting">全局设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button  icon="el-icon-switch-button" style="border: 0"></el-button>
    </div>
  </el-row>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
export default {
  name: "blogHeader",
  data() {
    return {
      value: true,
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      userName:'超级管理员'
    };
  },
  computed:{
    ...mapState({
      isCollapse:'isCollapse'
    })
  },
  created() {
      this.initData()
  },
  methods: {
    initData(){
      let circleUrl = localStorage.getItem('circleUrl')
      let userName = localStorage.getItem('userName')
      this.circleUrl=circleUrl?circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      this.userName=userName?userName:"超级管理员"
    },
    ...mapMutations([
     'modifyCollapse'
    ]),
  }
};
</script>

<style scoped lang="less">
.blog-header {
  height: 50px;
  text-align: center;
  .blog-header-left,
  .blog-header-center,
  .blog-header-right {
    height: 100%;
    line-height: 50px;
  }
  .blog-header-left{
    width: 180px;
  }
  .blog-header-left,
  .blog-header-center {
    float: left;
  }
  .blog-header-right {
    float: right;
    display: flex;
    div {
      margin-right: 5px;
    }
  }
}
</style>
