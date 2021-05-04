<template>
	<el-form :model="ruleForm" ref="ruleForm" label-position="left" label-width="100px" size="mini">
		<el-form-item label="分类专栏:" required>
			<el-tag :key="tag" v-for="tag in typeTags" closable disable-transitions @close="handleClose(tag)">{{ tag }}</el-tag>
			<el-input v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
			<el-button v-else size="small" v-show="typeTags.length < 1" @click="showInput">+新建分类专栏</el-button>
			<el-card style="margin-top: 5px;">
				<div slot="header"><span>最多选择1个分类专栏</span></div>
				<div class="blog-type">
					<el-radio-group v-model="ruleForm.type.radioType" @change="changeType"><el-radio label="备选"></el-radio></el-radio-group>
				</div>
			</el-card>
		</el-form-item>
	</el-form>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'articleType',
	props: {},
	data() {
		return {
			inputVisible: false,
			inputValue: '',
			ruleForm: {
				type: {
					inputType: '',
					radioType: ''
				}
			}
		};
	},
	computed: {
		...mapState({
			typeTags: 'typeTags'
		})
	},
	methods: {
		handleInputConfirm() {
			let inputValue = this.inputValue;
			if (inputValue) {
				this.typeTags.push(inputValue);
			}
			this.inputVisible = false;
			this.inputValue = '';
		},
		showInput() {
			this.inputVisible = true;
			this.$nextTick(_ => {
				this.$refs.saveTagInput.$refs.input.focus();
			});
		},
		addType() {
			if (!this.ruleForm.type.inputType.trim() || this.typeTags.length > 0) return;
			this.typeTags.push(this.ruleForm.type.inputType);
			this.ruleForm.type.inputType = '';
		},
		handleClose(tag) {
			this.typeTags.splice(this.typeTags.indexOf(tag), 1);
			this.ruleForm.type.radioType = '';
		},
		changeType(label) {
			if (!label.trim() || this.typeTags.length > 0) return;
			this.typeTags.push(label);
		}
	}
};
</script>

<style scoped lang="less">
/deep/.el-card {
	.el-card__header {
		padding: 5px 10px;
	}
	.el-card__body {
		padding: 5px 10px;
	}
}
.el-tag {
	margin-right: 5px;
	margin-bottom: 5px;
	cursor: pointer;
}
.blog-type {
	border-top: 0;
	max-height: 100px;
	padding: 5px;
	overflow: auto;
}
.el-card.is-always-shadow {
	box-shadow: none;
}
</style>
