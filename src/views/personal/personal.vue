<!-- 个人中心组件 -->
<template>
  <div id="personal">
    <returnUrl :title=" '个人中心' " :reUrl=" '/' "></returnUrl>
    <!-- 头部个人信息 -->
    <header>
      <div class="img-wrap">
        <div class="avatar" style="background-image: url('../../../static/img/head.jpg');"></div>
      </div>
      <div class="info">
        <h3 style="font-size: 22px">Choo</h3>
        <p>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <span class="pos" v-if=" curAddr " v-text=" curAddr "></span>
          <span class="pos" v-else>正在定位...</span>
        </p>
      </div>
    </header>
    <!-- 选项栏 -->
    <article>
      <!-- 订单选项 -->
      <div class="order">
        <div class="order-box">
          <router-link :to=" '/appoinment' " class="order-item">
            <img src="../../../static/img/clock.png" alt="归还">
            <span>我的预约</span>
          </router-link>
          <router-link :to=" '/pay' " class="order-item" style="margin: 0 42px;">
            <img src="../../../static/img/pay.png" alt="领取">
            <span>待支付</span>
          </router-link>
          <router-link :to=" '/allOrder' " class="order-item">
            <img src="../../../static/img/all.png" alt="评价">
            <span>全部订单</span>
          </router-link>
        </div>
      </div>
      <!-- 功能连接 -->
      <ul class="list">
        <router-link :to=" '/fault' ">
          <li class="item" style=" border-bottom: 1px solid #eaeef1 ">
            <i class="fa fa-wrench icon"></i>
            <span>故障报修</span>
            <i class="fa fa-angle-right fr"></i>
          </li>
        </router-link>
        <router-link :to=" '/myCash' ">
          <li class="item"><i class="fa fa-jpy icon" style="font-size: 15px;"></i>
            <span>我的押金</span>
            <i class="fa fa-angle-right fr"></i>
          </li>
        </router-link>
        <router-link :to=" '/opinion' ">
          <li class="item" style=" border-bottom: 1px solid #eaeef1;margin-top: 5px;">
            <i class="fa fa-pencil-square-o icon" style="font-size: 14px;"></i>
            <span>意见反馈</span>
            <i class="fa fa-angle-right fr"></i>
          </li>
        </router-link>
        <li class="item" style=" border-bottom: 1px solid #eaeef1 ">
          <i class="fa fa-hand-o-right icon"></i>
          <span>用户指南</span>
          <i class="fa fa-angle-right fr"></i>
        </li>
        <router-link :to=" '/about' ">
          <li class="item">
            <i class="fa fa-map-marker icon"></i>
            <span>关于多动朕</span>
            <i class="fa fa-angle-right fr"></i>
          </li>
        </router-link>
      </ul>
    </article>
    <!-- 去支付弹窗 -->
    <goPay :title=" '您有一个订单需要支付' " :alert=" alert " @goPay=" goPay "></goPay>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
import goPay from './childrens/goPay';
export default {
  name: 'personal',
  data() {
    return {
      alert: false
    }
  },
  methods: {
    goPay() {
      this.alert = false;
      this.$router.push('/pay');
    }
  },
  components: {
    returnUrl,
    goPay
  },
  computed: {
    curAddr() {
      return this.$store.state.curAddr;
    }
  },
  created() {
    // 如果仓库地址失效了,就从新获取一遍
    if (!this.$store.state.curAddr) {
      this.$store.dispatch('SET_ADDR');
    };
  }
}

</script>
<style scoped lang="scss">
$blue: #0788ee;
$gray: #a6a6a6;

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid $blue;
  background-color: #0788ee;
  .img-wrap {
    .avatar {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .info {
    flex-grow: 2;
    margin-left: 15px;
    h3,
    span,
    i {
      color: #fff;
    }
  }
}

.list {
  margin-top: 5px;
  .item {
    background-color: #fff;
    padding: 15px 20px;
    i {
      color: $blue;
      font-size: 16px;
      vertical-align: text-bottom;
    }
    .fa-angle-right {
      margin-top: -5px;
      font-size: 22px;
    }
  }
}

.icon {
  display: inline-block;
  width: 20px;
}

.order {
  padding: 10px 20px;
  background-color: #fff;
  i {
    color: $blue;
  }
  .order-box {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    .order-item {
      flex-basis: 50px;
      text-align: center;
      img {
        height: 30px;
      }
      span {
        margin-top: 5px;
        display: inline-block;
      }
    }
  }
}

</style>
