<template>
  <div class="login">
    <section class="section_login">
      <h2>
        今天 你会去改变
        <br />
        什么呢？
        <br />
        <b style="font-size: 12px">开始你的创作之旅</b>
      </h2>
      <component
        :is="componentName"
        :show="show"
        :componentName.sync="componentName"
        @setTimeHandler="setTime"
      ></component>
    </section>
  </div>
</template>
<script>
export default {
  name: "sign",
  components: {
    login: () => import("@/components/login"),
    register: () => import("@/components/register")
  },
  data() {
    return {
      show: false,
      componentName: "login"
    };
  },
  created() {
    this.setTime();
  },
  methods: {
    setTime() {
      setTimeout(() => {
        this.show = !this.show;
      }, 200);
    },
    onSubmit() {}
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/img/bg_login.jpg") no-repeat center;
  background-size: 100%;
}
.section_login {
  width: 500px;
  height: 300px;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 1)
  );
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px;
  h2 {
    float: left;
    padding: 20px 10px;
    color: #3459a7;
    line-height: 30px;
  }
  .section_login_item {
    float: right;
    width: 50%;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}
/deep/.section_login_item {
  .el-form-item__content {
    margin-left: 0px !important;
  }
  .el-form-item__error {
    padding-top: 0 !important;
  }
}
</style>
