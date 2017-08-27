<!-- 确认付款组件 -->
<template>
  <div id="pay">
    <return-url :title=" '费用支付' " :reUrl=" '/personal' "></return-url>
    <!-- 总价钱 -->
    <div class="count-m">
      <span>4.00</span>元
    </div>
    <!-- 费用详情 -->
    <div class="details">
      <div class="title-wrap">
        <p class="line" style="margin-right: 10px"></p>
        <p class="title">费用详情</p>
        <p class="line" style="margin-left: 10px"></p>
      </div>
      <p style="text-align: center;margin: 15px 0;">标准时长计费</p>
      <p class="clearfix" style="padding: 0 20px;">
        <span class="fl" style="color: #a6a6a6">216分钟*1元/小时</span>
        <span class="fr" style="color: #a6a6a6">4.00元</span>
      </p>
    </div>
    <!-- 我的评价 -->
    <div class="evaluate">
      <div class="title-wrap">
        <p class="line" style="margin-right: 10px"></p>
        <p class="title">我的评价</p>
        <p class="line" style="margin-left: 10px"></p>
      </div>
      <!-- 器材满意度 -->
      <div>
        <p style="text-align:center;margin: 15px 0">器材满意度</p>
        <ul class="eq-list clearfix">
          <li class="eq-item off" v-for=" index in 5 " @click.stop=" chooseStar('eq',index,$event) "></li>
        </ul>
      </div>
      <!-- 机器满意度 -->
      <div>
        <p style="text-align:center;margin: 15px 0">机器满意度</p>
        <ul class="mc-list clearfix">
          <li class="mc-item off" v-for=" index in 5 " @click.stop=" chooseStar('mc',index,$event) "></li>
        </ul>
      </div>
    </div>
    <!-- 说点什么 -->
    <div>
      <textarea placeholder="我还想说点什么..." class="area"></textarea>
    </div>
    <!-- 支付按钮 -->
    <div style="text-align: center">
      <button id="pay-btn" @click=" payMoney ">确认支付</button>
    </div>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk';
import { wechatPay } from 'api/wechat';
import returnUrl from '@/components/returnUrl';
export default {
  name: 'pay',
  data() {
    return {
      eqIndex: 0, // 器材满意度,默认是0
      eqArray: [], // 器材星星数组
      mcIndex: 0, // 机器满意度,默认是0
      mcArray: [] // 机器星星数组
    }
  },
  computed: {
    // 返回当前微信用户
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    // 订单满意度,第一个参数是打星的类型
    chooseStar(t,num, e) {
      this[t + 'Index'] = num - 1;
      let tg = e.target;
      this[t + 'Array'].forEach((item, index) => {
        index < num ? item.classList.add('on') : item.classList.remove('on');
      })
    },

    // 付钱
    payMoney(body,orderid) {
      wx.ready(() => {
        // 微信支付配置参数
        const opt = {
          option: 'unifiedorder',
          openid: this.user.openid,
          body,
          orderid
        }
        wechatPay(opt)
          .then((res) => {
            let resData = res.data;
            // 微信支付,还可以有一个参数是回调函数
            wx.chooseWXPay(resData);
          })
          .catch((err) => {
            throw new Error(err);
          });
      });
    }
  },
  components: {
    returnUrl
  },
  mounted() {
    // 当DOM节点被创建时,将列表指向属性
    this.eqArray = document.querySelectorAll('.eq-item');
    this.mcArray = document.querySelectorAll('.mc-item');
  }
}

</script>
<style scoped lang="scss">
$main_color: #0788ee;
$gray: #a6a6a6;
.count-m {
  text-align: center;
  margin-top: 15px;
  span {
    font-size: 36px;
  }
}

.details,
.evaluate {
  margin-top: 10px;
}

.title-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  .line {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
  }
  .title {
    color: $gray;
  }
}

.eq-list,
.mc-list {
  width: 175px;
  margin: 0 auto;
  .eq-item,
  .mc-item {
    float: left;
    width: 20%;
    height: 28px;
  }
  .off {
    background-image: url('../../../static/img/gray.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .on {
    background-image: url('../../../static/img/yellow.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.area {
  margin-top: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 5px;
  outline: none;
  width: 100%;
  height: 100px;
  resize: none;
}

#pay-btn {
  margin-top: 10px;
  width: 90%;
  border: none;
  height: 35px;
  line-height: 35px;
  background-color: $main_color;
  color: #fff;
  border-radius: 20px;
}

</style>
