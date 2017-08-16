<!-- 故障报修组件 -->
<template>
  <div id="Fault">
    <returnUrl :title=" '我的保障' " :reUrl=" '/personal' "></returnUrl>
    <ul>
      <li class="item">
        <router-link :to=" 'machine' ">
          <div class="img-wrap"><img src="../../../static/img/machine.png" alt="机器故障"></div>
          <div class="content-wrap">
            <div class="content">
              <p><strong style="font-size:16px">机器故障</strong></p>
              <p style="margin-top: 5px;color:rgb(167,170,172)">显示不了验证码、nfc开不了门...</p>
            </div>
            <i class="fa fa-angle-right fr" aria-hidden="true"></i>
          </div>
        </router-link>
      </li>
      <li class="item">
        <router-link :to=" 'equipment' ">
          <div class="img-wrap"><img src="../../../static/img/material.png" alt="器材故障"></div>
          <div class="content-wrap">
            <div class="content">
              <p><strong style="font-size:16px">器材故障</strong></p>
              <p style="margin-top: 5px;color:rgb(167,170,172)">球类故障、拍类故障</p>
            </div>
            <i class="fa fa-angle-right fr" aria-hidden="true"></i>
          </div>
        </router-link>
      </li>
      <li class="item">
        <router-link :to=" 'otherFault' ">
          <div class="img-wrap"><img src="../../../static/img/other.png" alt="其他故障"></div>
          <div class="content-wrap">
            <div class="content">
              <p><strong style="font-size:16px">其他故障</strong></p>
              <p style="margin-top: 5px;color:rgb(167,170,172)">计费故障、恶意破坏举报</p>
            </div>
            <i class="fa fa-angle-right fr" aria-hidden="true"></i>
          </div>
        </router-link>
      </li>
      <router-link :to=" '/myFault' ">
        <li class="item">
          <div class="img-wrap"><img src="../../../static/img/repairs.png" alt="我的报修"></div>
          <div class="content-wrap">
            <div class="content">
              <p><strong style="font-size:16px">我的报修</strong></p>
              <p style="margin-top: 5px;color:rgb(167,170,172)">查看我的报修状况</p>
            </div>
            <i class="fa fa-angle-right fr" aria-hidden="true"></i>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
export default {
  name: 'Fault',
  title: '故障报修',
  data() {
    return {

    }
  },
  components: {
    returnUrl
  }
}

</script>
<style scoped lang="scss">
.item {
  margin-top: 35px;
  padding: 10px 10px 10px 95px;
  background-color: #fff;
  position: relative;
  .img-wrap {
    width: 75px;
    position: absolute;
    bottom: 0;
    left: 10px;
    img {
      width: 100%;
    }
  }
  .content-wrap {
    .content {
      display: inline-block;
    }
    i {
      color: #0788ee;
      font-size: 22px;
      margin-top: 5px;
    }
  }
}

</style>
