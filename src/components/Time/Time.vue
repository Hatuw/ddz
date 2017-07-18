<!-- 组件 -->
<template>
	<div id="Time">
		<!-- 圆圈包裹 -->
		<div class="big-cir">
			<img src="../../../static/img/cir.png" alt="圈">
			<div class="samll-cir">
			<div class="text-wrap">
				<p class="tip-text"><strong>已用时</strong></p>
				<p class="countDown">{{ clockTime.h }}:{{ clockTime.m }}:{{ clockTime.s }}</p>
			</div>
			</div>
		</div>
		<!-- 计费包裹 -->
		<div class="m-wrap">
			<p style="font-size: 24px">篮球</p>
			<p style="font-size: 16px;margin-top: 10px;">共计<strong>{{ money }}</strong>元</p>
		</div>
		<!-- 底部按钮 -->
		<footer>
			<div class="btn-wrap clearfix">
				<div class="btn-group-l" v-show=" showList ">
					<!-- 机器故障 -->
					<div class="btn machine"><i class="fa fa-ambulance"></i><p>机器故障</p></div>
					<!-- 器材故障 -->
					<div class="btn equipment" style="margin-right: 0px;"><i class="fa fa-futbol-o"></i><p>器材故障</p></div>
				</div>
				<!-- 控制按钮 -->
				<div class="ctr-btn" @click=" changeShowList " :class="{ r0: showList }"><i class="fa fa-times-circle" aria-hidden="true"></i></div>
				<div class="btn-group-r" v-show=" showList ">
					<!-- 计费故障 -->
					<div class="btn charging"><i class="fa fa-jpy"></i><p>计费故障</p></div>
					<!-- 其他故障 -->
					<div class="btn other" style="margin-right: 0px;"><i class="fa fa-thumbs-o-down"></i><p>其他故障</p></div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Time',
		title: '计时',
		data() {
			return {
				clockTime: {
					h: 0,	// 时
					m: 0,	// 分
					s: 0	// 秒
				},
				money: '00.00', // 费用
				showList: false
			}
		},
		methods: {
			changeShowList() {
				this.showList = !this.showList;
			}
		}
	}
</script>

<style lang="scss">
	html,body,#app {
		height: 100%;
	}
	#Time {
		height: 100%;
		background-image:linear-gradient(to bottom, #7bc8e2,#5382d1);
	}
	.big-cir {
		position: fixed;
		top: 33%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		width: 245px;
		height: 245px;
		box-shadow: 0px 0px 20px 0px #094cbd;
		border-radius: 50%;
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 92%;
		}
		.samll-cir {
			width: 80%;
			height: 196px;
			margin: 0 auto;
			border-radius: 50%;
			background-color: #fff;
			box-shadow: 0px 5px 13px -3px #578ad3;
			margin-top: 24px;
			position: relative;
			.text-wrap {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				text-align: center;
				.tip-text{
					font-size: 16px;
				}
				.countDown {
					font-size: 32px;
				}
			}
		}
	}
	.m-wrap {
		padding-top: 335px;
		text-align: center;
		strong {
			display: inline-block;
			color: #fff;
			margin: 0px 10px;
			font-size: 32px;
		}
	}
	.btn-wrap {
		height: 47px;
		margin-top: 70px;
		padding: 0 20px;
		position: relative;
		.btn {
			margin-right: 15px;
			text-align: center;
			flex: 1;
			p {
				margin-top: 10px;
			}
			i {
				color: #fff;
				font-size: 26px;
			}
		}
		.btn-group-l {
			float: left;
			display: flex;
		}
		.ctr-btn {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%) rotate(45deg);
			transition: transform .3s ease-out;
			display: inline-block;
			.fa {
				color: #094CC0;
				font-size: 48px;
			}
		}
		.r0 {
			transform: translate(-50%,-50%) rotate(0deg) !important;
		}
		.btn-group-r {
			float: right;
			display: flex;
		}
	}
</style>