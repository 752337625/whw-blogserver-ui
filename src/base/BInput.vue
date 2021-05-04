<template>
  <el-form ref="form" :model="form">
    <el-form-item>
      <el-input
        v-model="form.text"
        size="mini"
        :placeholder="placeholder"
        @keyup.enter.native="submit"
        clearable
      >
        <el-button
          icon="el-icon-search"
          slot="append"
          @keyup.enter.native="submit"
          @click="submit"
        ></el-button>
      </el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "BInput",
  props: {
    placeholder: {
      type: String,
      default: "请输入名称",
      require: true
    }
  },
  data() {
    return {
      form: {
        text: ""
      }
    };
  },
  methods: {
    submit() {
      let text = this.form.text.trim();
      if (!text) return;
      this.$emit("textHandler", {text});
    }
  }
};
</script>

<style scoped lang="less">
.el-form-item {
  margin-bottom: 0 !important;
}
.el-form {
  width: 200px;
}
</style>
