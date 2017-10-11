<!-- 组件 -->
<template>
  <div id="Time">
    <!-- 圆圈包裹 -->
    <div class="big-cir">
      <img src="../../../static/img/cir.png" alt="圈" :style=" { transform: `translate(-50%,-50%) rotate(${rotate}deg)` } ">
      <div class="samll-cir">
        <div class="text-wrap">
          <p class="tip-text"><strong>已用时</strong></p>
          <p class="countDown">{{ clockTime.h | format }}:{{ clockTime.m | format}}:{{ clockTime.s | format}}</p>
        </div>
      </div>
    </div>
    <!-- 计费包裹 -->
    <div class="m-wrap">
      <p style="font-size: 24px">篮球</p>
      <p style="font-size: 16px;margin-top: 10px;">共计<strong>{{ money }}.00</strong>元</p>
    </div>
    <!-- 底部按钮 -->
    <div id="footer">
      <div class="btn-wrap clearfix">
        <div class="btn-group-l" v-show=" showList ">
          <!-- 机器故障 -->
          <router-link to="machine">
            <div class="btn machine">
              <i class="fa fa-ambulance"></i>
              <p>机器故障</p>
            </div>
          </router-link>
          <!-- 器材故障 -->
          <router-link to="equipment">
            <div class="btn equipment" style="margin-right: 0px;">
              <i class="fa fa-futbol-o"></i>
              <p>器材故障</p>
            </div>
          </router-link>
        </div>
        <!-- 控制按钮 -->
        <div class="ctr-btn" @click=" changeShowList " :class="{ r0: showList }">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <div class="btn-group-r" v-show=" showList ">
          <!-- 计费故障 -->
          <div class="btn charging">
            <i class="fa fa-jpy"></i>
            <p>计费故障</p>
          </div>
          <!-- 其他故障 -->
          <div class="btn other" style="margin-right: 0px;">
            <i class="fa fa-thumbs-o-down"></i>
            <p>其他故障</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserOrder } from 'api/user';
export default {
  name: 'Time',
  title: '计时',
  data() {
    return {
      clockTime: {
        h: 0, // 时
        m: 0, // 分
        s: 0 // 秒
      },
      money: '00', // 费用
      showList: false,
      rotate: 0
    }
  },
  computed: {
    sport() {
      return this.$store.state.sport;
    },
    // 返回当前用户信息
    user() {
      return this.$store.state.user;
    },
    h() {
      return this.clockTime.h;
    },
    m() {
      return this.clockTime.m;
    },
    s() {
      return this.clockTime.s;
    }
  },
  filters: {
    format(val) {
      return val <= 9 ? '0' + val : val;
    }
  },
  watch: {
    s(n) {
      if (n > 59) {
        this.clockTime.m++;
        this.clockTime.s = 0;
      }
    },
    m(n) {
      if (n > 59) {
        this.clockTime.h++;
        this.clockTime.m = 0;
      }
    },
    h(n, o) {
      n === o ? true : this.money = n;
    }
  },
  methods: {
    changeShowList() {
      this.showList = !this.showList;
    },
    timeStart() {
      window.setInterval(() => {
        this.clockTime.s++;
      }, 1000);
    },
    // 计算相差时间
    filterTime(ct) {
      const nowTime = new Date();
      const createTime = new Date(ct).getTime() > nowTime.getTime() ? new Date() : new Date(ct);
      //时间差的毫秒数
      const day = nowTime.getTime() - createTime.getTime();
      //计算出小时数
      const leave1 = day % (24 * 3600 * 1000);
      const h = Math.floor(leave1 / (3600 * 1000));
      //计算相差分钟数
      const leave2 = leave1 % (3600 * 1000);
      const m = Math.floor(leave2 / (60 * 1000));
      //计算相差秒数
      const leave3 = leave2 % (60 * 1000);
      const s = Math.round(leave3 / 1000);
      return { h, m, s };
    }
  },
  created() {
    getUserOrder(this.user.user_id)
      .then((res) => {
        console.log('-------------------------------getUserOrder');
        console.log(res);
        const ct = res.data.data[0].create_time;
        const time = this.filterTime(ct);
        this.clockTime = time;
        this.money = this.clockTime.h == 0 ? 1 : this.clockTime.h;
      })
  },
  mounted() {
    document.querySelector('#app').style.height = '100%';
    this.timeStart();
  }
}

</script>
<style lang="scss" scoped>
html,
body,
#app {
  height: 100%;
}

#Time {
  height: 100%;
  background-image: linear-gradient(to bottom, #7bc8e2, #5382d1);
}

.big-cir {
  position: fixed;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 245px;
  height: 245px;
  box-shadow: 0px 0px 20px 0px #094cbd;
  border-radius: 50%;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      transform: translate(-50%, -50%);
      text-align: center;
      .tip-text {
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
    transform: translate(-50%, -50%) rotate(45deg);
    transition: transform .3s ease-out;
    backface-visibility: hidden;
    display: inline-block;
    .fa {
      color: #094CC0;
      font-size: 48px;
    }
  }
  .r0 {
    transform: translate3d(-50%, -50%, 0px) rotate(0deg) !important;
  }
  .btn-group-r {
    float: right;
    display: flex;
  }
}

@media(min-height: 667px) {
  .m-wrap {
    padding-top: 360px;
  }
}

@media(min-height: 640px) {
  .m-wrap {
    padding-top: 360px;
  }
}

@media(min-height: 732px) {
  .m-wrap {
    padding-top: 385px;
  }
}





































/**
 * ipad
 */

@media(min-width: 767px) {
  .m-wrap {
    padding-top: 485px;
  }
  #footer {
    width: 399px;
    margin: 0 auto;
  }
}

</style>
