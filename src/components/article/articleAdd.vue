<template>
	<div>
		<div>
			<el-form :model="ruleForm" ref="ruleForm" label-position="left" label-width="auto" size="mini" style="display: flex;">
				<el-form-item label="文章标题" required style="width: calc(100% - 248px);"><el-input v-model="ruleForm.title"></el-input></el-form-item>
				<el-form-item>
					<el-button>保存草稿</el-button>
					<el-button type="primary" @click="dialogTableVisible = true">发布文章</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div id="wangEditor" class="blog-wangEditor"></div>
		<el-dialog title="发布文章" width="50%" :visible.sync="dialogTableVisible">
			<articleLabel></articleLabel>
			<articleType></articleType>
			<articleClass></articleClass>
			<articleRelease></articleRelease>
			<div slot="footer" class="dialog-footer">
				<el-button size="small">取 消</el-button>
				<el-button type="primary" size="small" @click="onSubmit">发布文章</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import wangEditor from 'wangeditor';
import { mapState } from 'vuex';
export default {
	name: 'articleAdd',
	data() {
		return {
			dialogTableVisible: false,
			ruleForm: {
				title: ''
			}
		};
	},
	computed: {
		...mapState({
			labelTags: 'labelTags',
			typeTags: 'typeTags',
			classTags: 'classTags',
			releaseTags: 'releaseTags'
		})
	},
	components: {
		articleLabel: () => import('@/components/article/components/articleLabel'),
		articleType: () => import('@/components/article/components/articleType'),
		articleClass: () => import('@/components/article/components/articleClass'),
		articleRelease: () => import('@/components/article/components/articleRelease')
	},
	mounted() {
		this.$nextTick(() => {
			const editor = new wangEditor('#wangEditor');
			editor.config.zIndex = 1;
			editor.config.placeholder = '自定义 placeholder 提示文字';
			editor.config.focus = true;
			editor.create();
		});
	},
	methods: {
		onSubmit(){
			console.log(this.labelTags,this.typeTags,this.classTags,this.releaseTags)
		}
	},
	destroyed() {}
};
</script>

<style scoped lang="less">
/deep/ .blog-wangEditor {
	height: calc(100% - 38px) !important;
	.w-e-text-container {
		height: calc(100% - 42px) !important;
	}
}
/deep/.el-dialog__wrapper {
	.el-dialog__body {
		padding-top: 10px;
		padding-bottom: 0px;
	}
}
/* .el-tag + .el-tag {
	margin-left: 10px;
}
.button-new-tag {
	height: 32px;
	line-height: 30px;
	padding-top: 0;
	padding-bottom: 0;
}
.input-new-tag {
	width: 90px;
	vertical-align: bottom;
} */
</style>
