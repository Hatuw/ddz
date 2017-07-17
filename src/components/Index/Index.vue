<!-- 组件 -->
<template>
	<div id="index">
    <!-- 顶部地理位置 -->
		<header>
			<i class="fa fa-map-marker" aria-hidden="true"></i>
			<span class="pos" v-text=" posVal "></span>
		</header>
    <!-- 轮播图包裹层 -->
    <div class="swiper-wrap">
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
    <!-- 体育器材 -->
    <article>
      <ul class="sport-wrap">
        <li v-for=" (item,index) in sports ">
          <div class="sport-img-wrap">
            <img :src=" '../../../static/img/' + item.en_name + '.png'" :alt=" item.cn_name ">
          </div>
          <p v-text=" item.cn_name  "></p>
        </li>
      </ul>
    </article>
    <!-- 底部功能按键 -->
    <footer>
      <div class="btn-wrap">
        <button>预定器材</button>
      </div>
      <div class="btn-wrap">
        <button>立即运动</button>
      </div>
    </footer>
	</div>
</template>

<script>
  import js_sdk from 'weixin-js-sdk';
	export default {
		name: 'index',
		data() {
			return {
        sports: [{
          en_name: 'football',
          cn_name: '足球'
        },{
          en_name: 'backetball',
          cn_name: '篮球'
        },{
          en_name: 'volleyball',
          cn_name: '排球'
        },{
          en_name: 'pingpong',
          cn_name: '乒乓球'
        },{
          en_name: 'badminton',
          cn_name: '羽毛球'
        },{
          en_name: 'tennis',
          cn_name: '网球'
        }],
				posVal: '广东轻工职业技术学院(广州校区)',
        swiperOption: {
          pagination: '.swiper-pagination', // 索引圆       
          autoplay: 3500, // 自动博fag
          effect: 'slider', // cube: 正方体, fade: 渐隐
          resistanceRatio: 0, // 值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
          lazyLoading : true // 懒加载
        }
			}
		},
    created() {
      let data = {
        noncestr: 'duodongzhen',
        timestamp: +new Date(),
        url: window.location.href.split('#')[0],
        jsApiList: ['getLocation']
      }
      this.axios.post('/api/getTicket',data)
      .then((res) => {
        js_sdk.config({
          debug: true,
          appId: res.data.appId,
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.noncestr, // 必填，生成签名的随机串
          signature: res.data.signature, // 必填，签名，见附录1
          jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }
	}
</script>

<style scoped lang="scss">
	header {
		padding: 10px 20px;
    border-bottom: 1px solid #000;
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
  .swiper-wrap {
    background-color: #f3f1f1;
  }
  .sport-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 25px;
    li {
      flex: 33.33%;
      .sport-img-wrap {
        text-align: center;
        background-color: #0788ee;
        border-radius: 50%;
        width: 75px;
        height: 75px;
        margin: 0 auto;
        position: relative;
        img {
          width: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      p {
        margin: 5px 0 10px 0;
        text-align: center;
      }
    }
  }
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    margin-bottom: 5px;
    .btn-wrap {
      flex: 1;
      button {
        display: block;
        width: 80%;
        height: 35px;
        margin: 0 auto;
        border: none;
        border-radius: 10px;
        border: 1px solid black;
        background-color: #a2d6f3;
      }
    }
  }
</style>