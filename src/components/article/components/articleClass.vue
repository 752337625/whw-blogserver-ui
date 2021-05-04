<template>
	<el-form ref="form" :model="ruleForm" label-position="left" label-width="100px" size="medium">
		<el-form-item label="文章类型:" required>
			<el-select v-model="classTags" placeholder="请选择文章类型" clearable>
				<el-option v-for="item in ruleForm.class.classOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
			</el-select>
		</el-form-item>
	</el-form>
</template>
<script>
export default {
	name: 'articleClass',
	data() {
		return {
			ruleForm: {
				class: {
					classOptions: [{ value: 1, label: '原创' }, { value:2, label: '转载' }, { value: 3, label: '翻译' }]
				}
			},
		};
	},
	computed: {
    classTags: {
      get: function () {
        return this.$store.state.classTags
      },
      set: function (newValue) {
        this.$store.state.classTags = newValue
      }
    }
	},
	methods: {

	}
};
</script>

<style scoped></style>
