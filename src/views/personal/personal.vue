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
          <i class="fa fa-map-marker" aria-hidden="true" style="color: #0788ee"></i>
          <span class="pos" v-if=" pos.province ">{{ pos.city }}{{ pos.district }}{{ pos.addr }}</span>
          <span class="pos" v-else>正在定位...</span>
        </p>
      </div>
    </header>
    <!-- 选项栏 -->
    <article>
      <div class="order"></div>
      <ul class="list">
        <router-link :to=" 'fault' ">
          <li class="item">
            <i class="fa fa-wrench"></i><span style="margin-left:5px">故障报修</span><i class="fa fa-angle-right fr"></i>
          </li>
        </router-link>
        <li class="item"><i class="fa fa-jpy"></i><span style="margin-left:5px">我的押金</span><i class="fa fa-angle-right fr"></i></li>
        <li class="item"><i class="fa fa-pencil-square-o"></i><span style="margin-left:5px">意见反馈</span><i class="fa fa-angle-right fr"></i></li>
        <li class="item"><i class="fa fa-hand-o-right"></i><span style="margin-left:5px">用户指南</span><i class="fa fa-angle-right fr"></i></li>
        <li class="item"><i class="fa fa-map-marker"></i><span style="margin-left:5px">关于多动朕</span><i class="fa fa-angle-right fr"></i></li>
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
    pos() {
      return this.$store.state.pos;
    }
  },
  created() {
    // 如果仓库地址失效了,就从新获取一遍
    if (!this.$store.state.pos.province) {
      this.$store.dispatch('GET_ADDR');
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
  border-bottom: 1px solid $gray;
  .img-wrap {
    border-radius: 50%;
    padding: 5px;
    border: 1px solid $blue;
    .avatar {
      height: 95px;
      width: 95px;
      border-radius: 50%;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .info {
    flex-group: 2;
    margin-left: 15px;
  }
}

.list {
  .item {
    margin-top: 5px;
    padding: 10px 20px;
    border-bottom: 1px solid $gray;
    border-top: 1px solid $gray;
    i {
      color: $blue;
    }
    .fa-angle-right {
      margin-top: -5px;
      font-size: 22px;
    }
  }
}

</style>
