<template>
  <div class="blog-aside">
    <el-menu
            class="el-menu-vertical-demo"
      default-active="/odometer"
      :collapse="isCollapse"
      :collapse-transition="true"
      :unique-opened="true"
      active-text-color="#409EFF"
      style="border: 0;"
      router
    >
      <el-submenu
        v-for="(item, index) in menuItem"
        :index="item.index"
        :key="index"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.text }}</span>
        </template>
        <el-menu-item
          v-for="(children, key) in item.children"
          :index="children.index"
          :key="key"
        >
          <template>
            <i :class="children.icon"></i>
            <span>{{ children.text }}</span>
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "blogAside",
  data() {
    return {
      menuItem: [
        {
          index: "/odometer",
          text: "仪表盘",
          icon: "el-icon-odometer",
          children: []
        },
        {
          index: "/2",
          text: "广告管理",
          icon: "el-icon-odometer",
          children: []
        },
        {
          index: "/3",
          text: "留言管理",
          icon: "el-icon-odometer",
          children: []
        },
        {
          index: "/6",
          text: "地图",
          icon: "el-icon-document",
          children: [
            {
              index: "/locationMap",
              text: "当前位置",
              icon: "el-icon-document"
            },
            {
              index: "/dplayer",
              text: "播放器",
              icon: "el-icon-document"
            }
          ]
        },
        {
          index: "/9",
          text: "文章管理",
          icon: "el-icon-document",
          children: [
            {
              index: "/articleadd",
              text: "新增文章",
              icon: "el-icon-document"
            },
            {
              index: "/articlelists",
              text: "文章列表",
              icon: "el-icon-document"
            }
          ]
        },
        {
          index: "/user",
          text: "博主管理",
          icon: "el-icon-user-solid",
          children: [
            {
              index: "/articleadd",
              text: "博主新增",
              icon: "el-icon-user-solid"
            },
            {
              index: "/articlelists",
              text: "博主列表",
              icon: "el-icon-user-solid"
            }
          ]
        },
        {
          index: "/menu",
          text: "菜单管理",
          icon: "el-icon-odometer",
          children: [
            {
              index: "/mneuList",
              text: "菜单列表",
              icon: "el-icon-user-solid"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState({
      isCollapse: "isCollapse"
    })
  },
  methods: {}
};
</script>

<style scoped lang="less">
.blog-aside {
  height: 100%;
  .el-menu{
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }
}

</style>
