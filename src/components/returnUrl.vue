<!-- 返回组件 -->
<template>
	<div id="ReturnUrl">
		<router-link :to=" reUrl ">
			<i class="fa fa-angle-left" aria-hidden="true"></i>
			<span style="vertical-align: top;margin-left:5px; color: #fff">返回</span>
		</router-link>
		<span class="title">{{ title }}</span>
	</div>
</template>

<script>
	export default {
		name: 'ReturnUrl',
		data() {
			return {

			}
		},
		props:{
			title: {
				type: String,
				required: true
			},
			reUrl: {
				type: String,
				required: true
			}
		}
	}
</script>

<style scoped lang="scss">
	#ReturnUrl{
		padding: 10px 15px;
		height: 20px;
		line-height: 20px;
		background-color: #0788ee;
		position: relative;
		.title{
			color: #fff;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		i{
	    font-size: 20px;
	    color: #fff;
		}
	}
</style>