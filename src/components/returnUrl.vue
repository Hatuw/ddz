<!-- 返回组件 -->
<template>
	<div id="ReturnUrl">
		<router-link :to=" reUrl ">
			<i class="fa fa-angle-left" aria-hidden="true"></i>
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
		height: 30px;
		line-height: 30px;
		background-color: #314962;
		position: relative;
		.title{
			color: #fff;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		i{
	    font-size: 26px;
	    color: #fff;
		}
	}
</style>