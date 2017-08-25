<!-- 首页组件 -->
<template>
  <div id="index">
    <!-- 顶部地理位置 -->
    <header>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <span class="pos" v-if=" curAddr ">{{ curAddr }}</span>
      <span class="pos" v-else>正在定位...</span>
    </header>
    <!-- 轮播图包裹层 -->
    <div class="swiper-wrap">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img data-src="../../static/img/banner1.jpg" alt="" class="img swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="../../static/img/banner2.jpg" alt="" class="img swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <swiper-slide>
          <img data-src="../../static/img/banner1.jpg" alt="" class="img swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 体育器材 -->
    <article>
      <ul class="sport-wrap">
        <li v-for=" (item,index) in sports " :key=" index ">
          <div class="sport-img-wrap" @click.stop=" chooseSport(item,$event) ">
            <img :src=" '../../../static/img/' + item.en_name + '.png'" :alt=" item.cn_name ">
            <div class="num-tip none">09</div>
          </div>
          <p v-text=" item.cn_name  "></p>
        </li>
      </ul>
    </article>
    <!-- 底部功能按键 -->
    <footer>
      <div class="btn-wrap btn-wrap-grow-1">
        <router-link to="personal">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        </router-link>
      </div>
      <div class="btn-wrap btn-wrap-grow-2">
        <button style="color: #0788ee;background-color:#fff">预定器材</button>
      </div>
      <div class="btn-wrap btn-wrap-grow-2">
        <button style="color: #fff" @click=" checkSchool ">立即运动</button>
      </div>
    </footer>
    <!-- picker组件 -->
    <div class="picker-wrap" v-show=" showPicker ">
      <p class="clearfix title" style="text-align:center;margin-bottom: 5px;">
        <span>请选择你当前所在的学校</span><i class="fa fa-times fr" aria-hidden="true" @click.stop=" changeShow('showPicker',false) "></i></p>
      <picker :slots="slots" @change="onValuesChange" :itemHeight="26"></picker>
      <button @click.stop=" changeShow('showPicker',false) ">确认</button>
    </div>
    <!-- 遮罩层 -->
    <div class="mask" v-show=" showPicker "></div>
    <!-- 弹框组件 -->
    <alertBox :title=" alertMsg.title " :subTitle=" alertMsg.subTitle " :alert=" alert " @close=" changeShow('alert',false) "></alertBox>
    <!-- 输入验证码组件 -->
    <codeBox :show=" showCode " @createOrder=" creatrsOrder "></codeBox>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import { getPlace, getSportNum, create_order, check_code } from 'api/index';
import { send_code } from 'api/wechat';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { picker } from 'mint-ui';
import alertBox from '@/components/alertBox';
import codeBox from './childrens/codeBox';
import sportData from 'utils/sport';
export default {
  name: 'index',
  data() {
    return {
      sports: sportData,
      swiperOption: {
        pagination: '.swiper-pagination', // 索引圆
        autoplay: 3500, // 自动播放
        effect: 'slider', // cube: 正方体, fade: 渐隐
        resistanceRatio: 0, // 值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
        lazyLoading: true // 懒加载
      },
      slots: [{
        values: [],
        textAlign: 'center',
        defaultIndex: 0
      }],
      showPicker: false,
      alert: false,
      showCode: false,
      alertMsg: {
        title: '',
        subTitle: ''
      }
    }
  },
  computed: {
    // 返回当前位置
    curAddr() {
      return this.$store.state.curAddr;
    },
    // 返回当前的选择运动器材
    sport() {
      return this.$store.state.sport;
    },
    // 返回所有投放的学校列表
    schoolList() {
      return this.$store.state.schoolList;
    }
  },
  components: {
    swiper,
    swiperSlide,
    picker,
    alertBox,
    codeBox
  },
  methods: {
    // 成功创建订单后的函数
    creatrsOrder() {
      this.changeShow('showCode', false);
      this.changeAlertText('创建订单成功', '您可以享受运动啦');
    },

    // 改变弹框文字
    changeAlertText(title, subtitle) {
      this.alertMsg.title = title;
      this.alertMsg.subTitle = subtitle;
      this.alert = true;
    },

    // 返回当前学校地址的所投放学校列表中的匹配
    matchSchool() {
      let curAddr = this.curAddr;
      let school = null;
      this.schoolList.forEach((item, index) => {
        let city = item.name.split(',')[0];
        let sName = item.name.split(',')[1];
        if (curAddr.includes(city) && curAddr.includes(sName)) {
          school = item;
        }
      });
      return school;
    },

    // 检查当前位置是否属于学校范围
    checkSchool() {
      // 判断用户当前位置是否正确获取和是否选择运动器材
      if (!this.curAddr) {
        this.showPicker = true;
      } else if (!this.sport.en_name) {
        this.changeAlertText('您还未选择运动球类', '请选择运动球类');
      } else {
        let school = this.matchSchool();
        if (!school) {
          this.changeAlertText('您所在的位置没有机器', '多动朕目前只在学校范围投放');
        } else if (!this.sport.count) {
          this.changeAlertText('机器球类数量为0', '请有球的时候再来吧');
        } else {
          // 向服务器发送运动订单
          create_order('13068501435', this.sport.serial)
            .then((res) => {
              this.showCode = true;
            })
            .catch((err) => {
              throw new Error(err)
            })
        }
      }
    },

    // 检查是否有运动器材被选中
    checkChoose(item) {
      return item.en_name.indexOf('_o') == -1 || !(item.en_name.indexOf('_o'));
    },

    // 发送当前器材剩余数量请求
    chooseSport(item, e) {
      // 检查当前地址地址是否在学校范围内
      if (!this.curAddr) {
        this.showPicker = true;
      } else if (this.checkChoose(item)) {
        this.imgClear();
        // 检查当前地区是否在学校范围
        let school = this.matchSchool();
        if (school) {
          getSportNum(item.sCode, school.place)
            .then((res) => {
              if (res.data.status) {
                try {
                  let num = res.data.data[0].count;
                  item.en_name = item.en_name + "_o";
                  this.$store.commit('SET_SPORT', item);
                  this.$store.commit('SET_SPORT', res.data.data[0]);
                  this.numClear();
                  // 显示当前运动球类的数量
                  let t = e.target.parentElement.querySelector('.num-tip');
                  t.innerText = num;
                  t.classList.remove('none');
                } catch (e) {
                  throw e;
                }
              }
            })
            .catch((err) => {
              throw new Error(err);
            })
        } else {
          this.changeAlertText('您所在的位置没有机器', '多动朕目前只在学校范围投放');
        }
      } else {
        item.en_name = item.en_name.replace(/_o/, '');
        this.$store.commit('SET_SPORT', {});
        let t = e.target.parentElement.querySelector('.num-tip');
        t.classList.add('none');
      }
    },

    // 清除所有选择图片
    imgClear() {
      for (var item in this.sports) {
        this.sports[item].en_name = this.sports[item].en_name.replace(/_o/, '');
      }
    },

    // 清除所有器材选择的数量
    numClear() {
      let dom = document.querySelectorAll('.num-tip');
      for (let i = 0; i < dom.length; i++) {
        dom[i].classList.add('none');
      }
    },

    // picker组件滑动选择时重新设置当前地址
    onValuesChange(picker, values) {
      if (this.showPicker) {
        this.$store.commit('SET_ADDR', values[0]);
      }
    },

    // 改变选择框显示
    changeShow(attr, flag) {
      this[attr] = flag;
    },

    // 添加学校选项
    addSchool() {
      this.schoolList.forEach((item, index) => {
        this.slots[0].values.push(item.name);
      });
    },

    // 获取微信用户信息
    getWechatInfo(code) {
      send_code(code)
        .then((res) => {
          this.$store.commit('SET_USER', res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },

  beforeRouteEnter(to, from, next) {
    if (location.href.indexOf('code') > 0) {
      let code = location.href.slice(location.href.indexOf('code') + 5, location.href.indexOf('#/'));
      next((self) => {
        self.getWechatInfo(code);
      });
    } else {
      next();
    }
  },

  mounted() {
    // 获取所有被投放的学校
    if (!this.schoolList.length) {
      getPlace()
        .then((res) => {
          this.$store.commit('SET_SCHOOLLIST', res.data.data);
        })
        .then(() => {
          // 添加学校选项
          this.addSchool();
        })
        .catch((err) => {
          throw new Error(err);
        });
    } else {
      this.addSchool();
    }

    // 自动获取当前位置 
    if (!this.curAddr) {
      this.$store.dispatch('SET_ADDR');
    };
  }
}

</script>
<style lang="scss">
$skyBlue: rgb(131, 194, 244);
$Blue: rgb(230, 240, 249);
#index,
#app {
  height: 100%;
}

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
  .title {
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      width: 70%;
    }
    i {
      color: rgb(17, 136, 233);
      font-size: 22px;
      z-index: 100;
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
  .fa {
    color: #0788ee;
  }
  .pos {
    color: #606060;
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
    position: relative;
    .sport-img-wrap {
      text-align: center;
      border-radius: 50%;
      width: 75px;
      height: 75px;
      margin: 0 auto;
      position: relative;
      .num-tip {
        text-align: center;
        top: -8%;
        right: -1%;
        position: absolute;
        height: 30px;
        line-height: 30px;
        color: #fff;
        width: 30px;
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('../../../static/img/show.png');
      }
      img {
        width: 85%;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
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
  align-items: center;
  padding-bottom: 20px;
  background-color: #eaeef1;
  .btn-wrap {
    button {
      background-color: #0788ee;
      outline: none;
      display: block;
      width: 90%;
      height: 35px;
      line-height: 35px;
      border: none;
      border-radius: 20px;
      border: 1px solid #0788ee;
      outline: none;
    }
  }
  .btn-wrap-grow-2 {
    flex-grow: 2;
  }
  .btn-wrap-grow-1 {
    flex-grow: 1;
    text-align: center;
    .fa {
      color: #0788ee;
      font-size: 28px;
    }
  }
}

</style>
