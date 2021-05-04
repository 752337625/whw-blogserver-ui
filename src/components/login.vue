<template>
	<transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutLeft">
		<div class="section_login_item" v-show="show">
			<div style="margin-bottom: 5px"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
			<strong style=" color: #ccc;font-size: 12px;">
				没有账户?
				<a style="font-size: 12px;margin-left: 10p;cursor: pointer;" @click.self.stop="$emit('setTimeHandler', false), $emit('update:componentName', 'register')">注册</a>
			</strong>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item prop="userName">
					<el-input v-model="ruleForm.userName" size="mini" prefix-icon="el-input__icon el-icon-user" placeholder="用户名/邮箱/手机号"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" size="mini" prefix-icon="el-input__icon el-icon-lock" placeholder="密码" show-password></el-input>
				</el-form-item>
				<br />
				<el-form-item>
					<a
						style="font-size: 12px;margin-left: 10px;cursor: pointer;"
						@click="$notify.info({title: '消息',type: 'warning',message: '功能未上线'})"
					>忘记密码？</a>
					<!-- <router-link :to="{ path: '/index' }" style="font-size: 12px;margin-left: 10px">忘记密码？</router-link> -->
					<el-button type="primary" @click="onSubmit('ruleForm')" size="small" style="float: right;width: 100px">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</transition>
</template>

<script>
import cryptoClass from "@/utiles/cryptoUtile";
export default {
	name: 'login',
	props: {
		show: {
			type: Boolean,
			default: false,
			require: true
		},
		componentName: {
			type: String,
			default: 'login',
			require: true
		}
	},
	data() {
		return {
			ruleForm: {
				userName: '',
				password: '',
			},
			rules: {
				userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { min: 7, max: 11, message: '长度在 7 到 11个字符', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 7, max: 15, message: '长度在 7 到 15个字符', trigger: 'blur' }]
			},
			circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
		};
	},
	created() {
		let circleUrl = localStorage.getItem('circleUrl')
		if(circleUrl)this.circleUrl=circleUrl
	},
	methods: {
		onSubmit(ruleForm) {
			this.$refs[ruleForm].validate(valid => {
				if (!valid) return;
				const crypto = new cryptoClass();
				let salt = crypto.getMd5Hex(this.ruleForm.password);
				let password = crypto.getHmacHex(this.ruleForm.password, salt);
				this.$api.login.loginServer("/login/select", {password:password,userName:this.ruleForm.userName}).then(res=>{
					if (res.status !== 200||res.data.length===0) return this.$message.error(res.message);
					localStorage.setItem("userName", res.data[0].userName);
					localStorage.setItem("circleUrl", res.data[0].headPhoto);
					this.$router.push({path:'/index'})
				}).catch(e=>{console.log(e)}) .finally(() => {});
			});
		}
	}
};
</script>

<style scoped lang="less"></style>
