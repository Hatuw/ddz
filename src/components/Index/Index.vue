<!-- 组件 -->
<template>
	<div id="index">
		<header>
			<i class="fa fa-map-marker" aria-hidden="true"></i>
			<span class="pos" v-text=" posVal "></span>
		</header>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				posVal: '广东轻工职业技术学院'
			}
		}
	}
</script>

<style scoped lang="scss">
	header {
		padding: 10px 20px;
		background-color: #ccc;
		.fa {
			color: #a6b2da;
		}
		.pos {

		}
	}
</style>