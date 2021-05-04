<template>
	<el-form ref="form" label-position="left" label-width="100px" size="mini">
		<el-form-item label="发布形式:" required>
			<el-radio-group v-model="releaseTags">
				<el-radio :label="1">公开</el-radio>
				<el-radio :label="2">私密</el-radio>
				<el-radio :label="3">粉丝可见</el-radio>
				<el-radio :label="4">VIP可见</el-radio>
			</el-radio-group>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	name: 'articleRelease',
	data() {
		return {};
	},
  computed: {
    releaseTags:{
      get: function () {
        return this.$store.state.releaseTags
      },
      set: function (newValue) {
        this.$store.state.releaseTags = newValue
      }
    }
	},
};
</script>

<style scoped></style>
