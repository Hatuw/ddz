<!-- 组件 -->
<template>
	<div id="index">
		<header>
			<i class="fa fa-map-marker" aria-hidden="true"></i>
			<span class="pos" v-text=" posVal "></span>
		</header>
    <div class="demo">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img data-src="../../static/img/twentyheart2.0.jpg" alt="" class="img swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="../../static/img/twentyheart.jpg" alt="" class="img swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="../../static/img/twentyheart2.0.jpg" alt="" class="img swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				posVal: '广东轻工职业技术学院(广州校区)',
        swiperOption: {
          pagination: '.swiper-pagination', // 索引圆       
          autoplay: 3500, // 自动博fag
          effect: 'slider', // cube: 正方体, fade: 渐隐
          resistanceRatio: 0, // 值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
          lazyLoading : true // 懒加载
        }
			}
		}
	}
</script>

<style scoped lang="scss">
	header {
		padding: 10px 20px;
    border-bottom: 1px solid black;
		.fa {
			color: #a6b2da;
		}
		.pos {
      color: #ccc;
      margin-left: 5px;
		}
	}
  .img {
    width: 100%;
  }
  .swiper-lazy-preloader {
    margin-top: 50px;
  }
  .demo {
    background-color: #f3f1f1;
  }
</style>