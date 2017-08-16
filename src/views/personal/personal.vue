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
      <div class="order">
        <div class="order-box">
          <div class="order-img"><img src="../../../static/img/return.png" alt="归还"><span>待归还</span></div>
          <div class="order-img"><img src="../../../static/img/clock.png" alt="领取"><span>待领取</span></div>
          <div class="order-img"><img src="../../../static/img/estimate.png" alt="评价"><span>待评价</span></div>
        </div>
      </div>
      <ul class="list">
        <router-link :to=" '/fault' ">
          <li class="item">
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
        <li class="item">
          <i class="fa fa-pencil-square-o icon" style="font-size: 14px;"></i>
          <span>意见反馈</span>
          <i class="fa fa-angle-right fr"></i>
        </li>
        <li class="item">
          <i class="fa fa-hand-o-right icon"></i>
          <span>用户指南</span>
          <i class="fa fa-angle-right fr"></i>
        </li>
        <li class="item">
          <i class="fa fa-map-marker icon"></i>
          <span>关于多动朕</span>
          <i class="fa fa-angle-right fr"></i>
        </li>
      </ul>
    </article>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
export default {
  name: 'personal',
  data() {
    return {

    }
  },
  components: {
    returnUrl
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
    h3,span,i {
      color: #fff;
    }
  }
}

.list {
  .item {
    margin-top: 5px;
    padding: 15px 20px;
    border-bottom: 1px solid $gray;
    border-top: 1px solid $gray;
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
  i {
    color: $blue;
  }
  .order-box {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    .order-img {
      margin: 0 25px;
      flex-basis: 36px;
      text-align: center;
      img {
        width: 100%;
      }
    }
  }
}

</style>
