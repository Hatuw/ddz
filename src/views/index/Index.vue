<!-- 首页组件 -->
<template>
  <div id="index">
    <!-- 顶部地理位置 -->
    <header>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <span class="pos" v-if=" pos.province ">{{ pos.city }}{{ pos.district }}{{ pos.addr }}</span>
      <span class="pos" v-else>正在定位...</span>
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
        <li v-for=" (item,index) in sports " :key=" index ">
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
        <button style="background-color:rgb(7, 136, 238);border: 1px solid rgb(230,240,249);color: #fff">预定器材</button>
      </div>
      <div class="btn-wrap">
        <button style="background-color:rgb(7, 136, 238);border: 1px solid rgb(131,194,244);color: #fff">立即运动</button>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      sports: [{
        en_name: 'football',
        cn_name: '足球'
      }, {
        en_name: 'basketball',
        cn_name: '篮球'
      }, {
        en_name: 'volleyball',
        cn_name: '排球'
      }, {
        en_name: 'pingpong',
        cn_name: '乒乓球'
      }, {
        en_name: 'badminton',
        cn_name: '羽毛球'
      }, {
        en_name: 'tennis',
        cn_name: '网球'
      }],
      swiperOption: {
        pagination: '.swiper-pagination', // 索引圆       
        autoplay: 3500, // 自动博fag
        effect: 'slider', // cube: 正方体, fade: 渐隐
        resistanceRatio: 0, // 值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        lazyLoading: true // 懒加载
      }
    }
  },
  computed: {
    pos() {
      return this.$store.state.pos;
    }
  },
  methods: {

  },
  created() {
    // 先获取当前位置
    this.$store.dispatch('GET_ADDR');
  }
}

</script>
<style scoped lang="scss">
$skyBlue: rgb(131, 194, 244);
$Blue: rgb(230, 240, 249);

header {
  padding: 10px 20px;
  border-bottom: 1px solid #000;
  .fa {
    color: #0788ee;
  }
  .pos {
    color: #797777;
    margin-left: 5px;
    display: inline-block;
    width: 90%;
    vertical-align: top;
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
      border-radius: 50%;
      width: 75px;
      height: 75px;
      margin: 0 auto;
      position: relative;
      img {
        width: 85%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
  margin-bottom: 20px;
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
    }
  }
}

</style>
