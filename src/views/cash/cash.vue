<!-- 缴纳组件 -->
<template>
  <div id="cash">
    <returnUrl :title=" '缴纳押金' " :reUrl=" '/' "></returnUrl>
    <!-- 押金金额 -->
    <div class="tip-text">
      缴纳押金
      <span>(可退)</span>
    </div>
    <!-- 价钱 -->
    <div class="m-text">
      {{ money }}
    </div>
    <!-- 押金须知 -->
    <div class="note-text">
      <p class="line" style="margin-right: 10px"></p>
      <p class="title">押金须知</p>
      <p class="line" style="margin-left: 10px"></p>
    </div>
    <!-- 列表 -->
    <ul class="list">
      <li><i class="fa fa-circle" aria-hidden="true"></i><span>押金退还时间为元一至三工作日内</span></li>
      <li><i class="fa fa-circle" aria-hidden="true"></i><span>你拥有的永远都是最新的</span></li>
      <li><i class="fa fa-circle" aria-hidden="true"></i><span>优质好球任你打</span></li>
      <li><i class="fa fa-circle" aria-hidden="true"></i><span>妈妈再也不用担心我丢球了</span></li>
      <li><i class="fa fa-circle" aria-hidden="true"></i><span>运动随时进行，立租立借走起</span></li>
    </ul>
    <!-- 协议书 -->
    <div class="pay-btn">
      <button @click=" payMoney ">确认支付</button>
    </div>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
import wx from 'weixin-js-sdk';
import { wechatPay } from 'api/wechat';
import { getUser } from 'api/user';
export default {
  name: 'cash',
  title: '押金',
  data() {
    return {
      money: '49.00'
    }
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },

  methods: {
    // 支付押金
    payMoney() {
      const _self = this;
      wx.ready(() => {
        // 微信支付配置参数
        const opt = {
          option: 'unifiedorder',
          openid: this.user.openid,
          body: 'pay_deposit',
          orderid: _self.randomNum(10)
        }
        wechatPay(opt)
          .then((res) => {
            let resData = res.data;
            // 微信支付,还可以有一个参数是回调函数
            // 支付成功后更新一下用户数据
            wx.chooseWXPay({
              timestamp: resData.timestamp,
              nonceStr: resData.nonceStr,
              package: resData.package,
              signType: resData.signType,
              paySign: resData.paySign,
              success: function(res) {
                getUser(_self.user.openid)
                  .then((respone) => {
                    _self.$store.commit('SET_USER', respone.data.data);
                    _self.$router.replace('/');
                  })
                  .catch((error) => {
                    throw error;
                  })
              }
            });
          })
          .catch((err) => {
            throw err;
          });
      });
    },
    randomNum(len) {
      let number = '';
      let random = function(len) {
        if (len == 0) return number;
        else {
          number = number + Math.ceil(Math.random() * 9);
          return random(len - 1);
        }
      }
      return random(len);
    }
  },

  components: {
    returnUrl
  },
  created() {
    document.querySelector('#app').style.backgroundColor = '#eaeef1';
  }
}

</script>
<style scoped lang="scss">
$main_color: #0788ee;
.tip-text,
.m-text {
  margin: 10px 0;
  text-align: center;
}

.list {
  margin-top: 10px;
  li {
    padding: 10px 20px;
    i {
      color: #0788ee;
    }
    span {
      margin-left: 5px;
    }
  }
}

.tip-text {
  font-size: 16px;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    color: #ccc;
    font-size: 12px;
  }
}

.m-text {
  font-size: 32px;
}

.note-text {
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
    color: $main_color;
  }
}

.pay-btn {
  margin-top: 10px;
  padding: 0 20px;
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
    &:focus {
      outline: none
    }
  }
}

</style>
