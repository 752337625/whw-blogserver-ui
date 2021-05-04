<template>
  <transition
    enter-active-class="animate__animated animate__fadeInLeft"
    leave-active-class="animate__animated animate__fadeOutLeft"
  >
    <div class="section_login_item" v-show="!show">
      <div style="margin-bottom: 5px" @click="simulation">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </div>
      <strong style=" color: #ccc;font-size: 12px;">头像</strong>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input
            v-model="ruleForm.userName"
            size="mini"
            prefix-icon="el-input__icon el-icon-user"
            placeholder="用户名/邮箱/手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            size="mini"
            prefix-icon="el-input__icon el-icon-lock"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>
        <br />
        <el-form-item>
          <el-button
            @click="
              $emit('setTimeHandler', true),
                $emit('update:componentName', 'login')
            "
            size="small"
            style="float: left;width: 100px;"
            >取消</el-button
          >
          <el-button
            type="primary"
            @click="onSubmit('ruleForm')"
            size="small"
            style="float: right;width: 100px"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
      <input
        style="display: none;"
        @change="changeFilter"
        id="file2"
        type="file"
        name="file"
      />
    </div>
  </transition>
</template>

<script>
import User from "@/entry/user";
import cryptoClass from "@/utiles/cryptoUtile";
export default {
  name: "register",
  props: {
    show: {
      type: Boolean,
      default: false,
      require: true
    },
    componentName: {
      type: String,
      default: "login",
      require: true
    }
  },
  data() {
    return {
      ruleForm: {
        userName: "",
        password: "",
        salt: "",
        headPhoto: "",
        address: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 7, max: 11, message: "长度在 7 到 11个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 7, max: 15, message: "长度在 7 到 15个字符", trigger: "blur" }
        ]
      },
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      var _this = this;
      let map = new window.AMap.Map("container", {
        resizeEnable: true
      });
      window.AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new window.AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 60000
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status, result) {
          if (status == "complete") {
            _this.onComplete(result, _this);
          } else {
            console.log(result);
          }
        });
      });
    },
    onComplete(data, _this) {
      let lngat = (data.position.lng + "," + data.position.lat).split(",");
      let geocoder = new window.AMap.Geocoder();
      geocoder.getAddress(lngat, function(status, result) {
        if (status === "complete" && result.regeocode) {
          _this.ruleForm.address = result.regeocode.formattedAddress;
        } else {
          _this.ruleForm.address = "根据经纬度查询地址失败";
        }
      });
    },
    changeFilter(event) {
      let _this = this;
      let target = event.target || event.srcElemen;
      if (!target.files[0].type.includes("image"))
        return this.$message({ message: "请上传图片", type: "warning" });
      let imgUrl = URL.createObjectURL(target.files[0]);
      this.circleUrl = imgUrl;
      let reader = new FileReader();
      reader.readAsDataURL(target.files[0]);
      reader.onload = () => {
        _this.ruleForm.headPhoto = reader.result;
      };
      reader.onerror = () => {
        _this.$message({
          message: "图片上Base64失败，可能会使头像上传不成功",
          type: "warning"
        });
      };
    },
    simulation() {
      document.getElementById("file2").click();
    },
    onSubmit(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (!valid) return;
        const { getYMDHMS } = require("@/utiles/DateUtile");
        const crypto = new cryptoClass();
        let salt = crypto.getMd5Hex(this.ruleForm.password);
        let password = crypto.getHmacHex(this.ruleForm.password, salt);
        let user = new User(
          this.ruleForm.userName,
          password,
          salt,
          this.ruleForm.headPhoto,
          this.ruleForm.address
        );
        user.createTime = getYMDHMS();
        user.modifyTime = getYMDHMS();
        this.$api.register
          .registerServer("/register/insert", user)
          .then(res => {
            if (res.status !== 200) return this.$message.error(res.message);
            this.$message({ type: "success", message: res.message });
            localStorage.setItem("circleUrl", this.circleUrl);
            this.$emit("setTimeHandler", true);
            this.$emit("update:componentName", "login");
          }).catch(e=>{console.log(e)}) .finally(() => {});
      });
    }
  }
};
</script>

<style scoped></style>
