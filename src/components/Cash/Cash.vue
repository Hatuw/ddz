<!-- 押金组件 -->
<template>
	<div id="cash">
		<!-- 金钱图标包裹层  -->
		<div class="logo-wrap">
			<img src="../../../static/img/mLogo.png" alt="押金图标">
		</div>
		<!-- 押金金额 -->
		<div class="tip-text">
			押金金额
		</div>
		<!-- 价钱 -->
		<div class="m-text">
			{{ money }}
		</div>
		<!-- 协议书 -->
		<div class="pay-btn">
			<button>确认支付</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cash',
		title: '押金',
		data() {
			return {
				money: '50.00'
			}
		}
	}
</script>

<style scoped lang="scss">
	#cash {
		margin-top: 40px;
	}
	.logo-wrap {
		width: 50px;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
	.tip-text,.m-text {
		margin: 10px 0;
		text-align: center;
	}
	.tip-text {
		font-size: 16px;
	}
	.m-text {
		font-size: 32px;
	}
	.pay-btn {
		margin-top: 20px;
		padding: 0 20px;
		button {
			width: 100%;
	    border: none;
	    background-color: rgb(17,136,233);
	    color: #fff;
	    border-radius: 10px;
			margin-top: 5px;
			box-shadow: 0px 10px 18px -7px #ccc;
			height: 35px;
			font-size: 16px;
			&:focus { outline: none }
		}
	}
</style>