<template>
	<el-form :model="ruleForm" ref="ruleForm" label-position="left" label-width="100px" size="mini">
		<el-form-item label="文章标签:" required>
			<el-tag :key="tag" v-for="tag in labelTags" closable disable-transitions @close="handleClose(tag)">{{ tag }}</el-tag>
			<el-popover placement="bottom-start" trigger="click">
				<el-card class="box-card">
					<h5 :style="{ color: labelTags.length === 5 ? '#F56C6C' : '#C0C4CC', marginBottom: '5px' }">
						{{ labelTags.length === 5 ? '最多只能添加5个标签！' : `还可以添加${5 - labelTags.length}个标签` }}
					</h5>
					<el-input v-model="ruleForm.label.inputLabel" placeholder="请输入文字搜索，Enter键入可添加自定义标签" size="medium" @keyup.enter.native="addLabel"></el-input>
					<el-tabs>
						<el-tab-pane v-for="item in ruleForm.label.articleLabel" :label="item.label" :key="item.label">
							<el-tag v-for="i in item.children" :key="i" @click="tabClick(i)">{{ i }}</el-tag>
						</el-tab-pane>
					</el-tabs>
				</el-card>
				<el-button slot="reference" size="small" v-show="labelTags.length < 5">+添加文章标签</el-button>
			</el-popover>
		</el-form-item>
	</el-form>
</template>

<script>
import articleLabel from '@/config/article/label';
import { mapState } from 'vuex';
export default {
	name: 'articleLabel',
	props: {},
	data() {
		return {
			ruleForm: {
				label: {
					articleLabel: articleLabel,
					inputLabel: ''
				}
			}
		};
	},
	computed: {
		...mapState({
			labelTags: 'labelTags'
		})
	},
	methods: {
		addLabel() {
			if (!this.ruleForm.label.inputLabel.trim() || this.labelTags.length > 4) return;
			this.labelTags.push(this.ruleForm.label.inputLabel);
			this.ruleForm.label.inputLabel = '';
		},
		handleClose(tag) {
			this.labelTags.splice(this.labelTags.indexOf(tag), 1);
		},
		tabClick(i) {
			if (this.labelTags.length > 4) return;
			this.labelTags.push(i);
		}
	}
};
</script>

<style scoped lang="less">
.box-card {
	width: 600px;
}
.el-tag {
	margin-right: 5px;
	margin-bottom: 5px;
	cursor: pointer;
}
</style>
