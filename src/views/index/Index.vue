<!-- 首页组件 -->
<template>
  <div id="index">
    <!-- 顶部地理位置 -->
    <header>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <span class="pos" v-if="curAddr ">{{ curAddr }}</span>
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
          <div class="sport-img-wrap" @click.stop=" chooseSport(item) ">
            <img :src=" '../../../static/img/' + item.en_name + '.png'" :alt=" item.cn_name ">
          </div>
          <p v-text=" item.cn_name  "></p>
        </li>
      </ul>
    </article>
    <!-- 底部功能按键 -->
    <footer>
      <div class="btn-wrap">
        <button style="color: #83c2f4;background-color:#fff">预定器材</button>
      </div>
      <div class="btn-wrap">
        <button style="color: #fff" @click=" checkSchool ">立即运动</button>
      </div>
    </footer>
    <!-- picker组件 -->
    <div class="picker-wrap" v-show=" showPicker ">
      <p class="clearfix title" style="text-align:center;margin-bottom: 5px;">
        <span>请选择你当前所在的学校</span><i class="fa fa-times fr" aria-hidden="true" @click.stop=" changeShowPicker(false) "></i></p>
      <picker :slots="slots" @change="onValuesChange" :itemHeight="26"></picker>
      <button @click.stop=" changeShowPicker(false) ">确认</button>
    </div>
    <!-- 遮罩层 -->
    <div class="mask" v-show=" showPicker "></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { picker } from 'mint-ui';
import schoolList from '../../../static/file/schoolList.js';
export default {
  name: 'index',
  data() {
    return {
      sports: [{
        en_name: 'football',
        cn_name: '足球',
        show_name: 'football_c'
      }, {
        en_name: 'basketball',
        cn_name: '篮球',
        show_name: 'basketball_c'
      }, {
        en_name: 'volleyball',
        cn_name: '排球',
        show_name: 'volleyball_c'
      }, {
        en_name: 'pingpong',
        cn_name: '乒乓球',
        show_name: 'pingpong_c'
      }, {
        en_name: 'badminton',
        cn_name: '羽毛球',
        show_name: 'badminton_c'
      }, {
        en_name: 'tennis',
        cn_name: '网球',
        show_name: 'tennis_c'
      }],
      swiperOption: {
        pagination: '.swiper-pagination', // 索引圆       
        autoplay: 3500, // 自动播放
        effect: 'slider', // cube: 正方体, fade: 渐隐
        resistanceRatio: 0, // 值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        lazyLoading: true // 懒加载
      },
      slots: [{
        values: schoolList,
        textAlign: 'center'
      }],
      showPicker: false
    }
  },
  computed: {
    // 返回当前位置
    curAddr() {
      return this.$store.state.curAddr;
    }
  },
  components: {
    swiper,
    swiperSlide,
    picker
  },
  methods: {
    // 判断所有被投放的学校中是否包含当前地址
    matchSchool() {
      let curAddr = this.curAddr;
      let school = null;
      schoolList.forEach((item, index) => {
        let city = item.split(',')[0];
        let sName = item.split(',')[1];
        if (curAddr.includes(city) && curAddr.includes(sName)) {
          school = item;
        }
      });
    },
    // 检查当前位置是否属于学校范围
    checkSchool() {
      // 先判断用户是否开启了浏览器自动定位
      if (!this.curAddr) {
        this.showPicker = true;
      } else {
        this.matchSchool();
      }
    },
    // 将选择的运动器材item放到仓库中
    chooseSport(item) {
      if (item.en_name.indexOf('_o') == -1 || !(item.en_name.indexOf('_o'))) {
        this.clear();
        this.$store.commit('SET_SPORT', item);
        item.en_name = item.en_name + "_o";
      } else {
        item.en_name = item.en_name.replace(/_o/, '');
        this.$store.commit('SET_SPORT', {});
      }
    },
    // 清除所有选择图片
    clear() {
      for (var item in this.sports) {
        this.sports[item].en_name = this.sports[item].en_name.replace(/_o/, '');
      }
    },
    // 改变滑动的值
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      if (values[0]) {
        this.$store.commit('SET_ADDR', values[0]);
      }
    },
    // 改变选择框显示
    changeShowPicker(flag) {
      this.showPicker = flag;
    }
  },
  created() {
    // 先设置当前位置
    this.$store.dispatch('SET_ADDR');
  }
}

</script>
<style lang="scss">
$skyBlue: rgb(131, 194, 244);
$Blue: rgb(230, 240, 249);

.picker-wrap {
  padding: 10px;
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 100;
  .picker-item {
    font-size: 16px;
  }
  .picker-selected {}
  .title {
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 100%;
    }
    i {
      color: rgb(17, 136, 233);
      font-size: 22px;
    }
  }
  button {
    width: 100%;
    border: none;
    background-color: rgb(17, 136, 233);
    color: #fff;
    border-radius: 20px;
    margin-top: 5px;
    box-shadow: 0px 10px 18px -7px #ccc;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    outline: none;
  }
}

.picker-center-highlight {
  &:after {
    background-color: $skyBlue;
  }
  &:before {
    background-color: $skyBlue;
  }
}

.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  z-index: 10;
}

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
      background-color: rgb(131, 194, 244);
      outline: none;
      display: block;
      width: 80%;
      height: 35px;
      line-height: 35px;
      margin: 0 auto;
      border: none;
      border-radius: 20px;
      border: 1px solid rgb(131, 194, 244);
    }
  }
}

</style>
