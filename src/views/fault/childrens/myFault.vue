<!-- 组件 -->
<template>
  <div id="myFault">
    <returnUrl :title=" '我的保障' " :reUrl=" '/fault' "></returnUrl>
    <!-- 已保障 -->
    <div v-if=" status ">
      <!-- 待处理 -->
      <div v-if=" flag == 0 ">
        <div class="time-line">
          <div class="box time-line-top">
            <div class="tip">
              <p style="color: #0788ee">待处理</p>
              <p style="color: rgb(167, 170, 172);margin-top: 5px;">2017-01-12 16:55</p>
            </div>
          </div>
          <div class="box time-line-mid">
            <div class="tip">
              <p>...</p>
            </div>
          </div>
          <div class="box time-line-bot">
            <div class="tip">
              <p>...</p>
            </div>
          </div>
        </div>
        <div class="text-info">
          <p>器材故障</p>
          <p>故障原因: xxxxxxxxxxxxxxxxxxxxx</p>
          <p>图片:</p>
        </div>
      </div>
      <!-- 处理中 -->
      <div v-else-if=" flag == 1 ">
        <div class="time-line">
          <div class="box time-line-mid">
            <div class="tip">
              <p>...</p>
            </div>
          </div>
          <div class="box time-line-top">
            <div class="tip">
              <p style="color: #0788ee">处理中</p>
              <p style="color: rgb(167, 170, 172);margin-top: 5px;">2017-01-12 16:55</p>
            </div>
          </div>
          <div class="box time-line-bot">
            <div class="tip">
              <p>...</p>
            </div>
          </div>
        </div>
        <div class="text-info">
          <p>器材故障</p>
          <p>故障原因: xxxxxxxxxxxxxxxxxxxxx</p>
          <p>正在加急处理中</p>
        </div>
      </div>
      <!-- 处理完成 -->
      <div v-else>
        <div class="time-line">
          <div class="box time-line-bot time-line-bot-show">
            <div class="tip">
              <p>...</p>
            </div>
          </div>
          <div class="box time-line-mid">
            <div class="tip">
              <p>...</p>
            </div>
          </div>
          <div class="box time-line-top time-line-top-none">
            <div class="tip">
              <p style="color: #0788ee">处理完成</p>
              <p style="color: rgb(167, 170, 172);margin-top: 5px;">2017-01-12 16:55</p>
            </div>
          </div>
        </div>
        <div class="text-info">
          <p>器材故障</p>
          <p>故障原因: xxxxxxxxxxxxxxxxxxxxx</p>
          <p>处理完成</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
export default {
  name: 'myFault',
  data() {
    return {
      status: 1, // 当前保障状态
      flag: 2 // 保障情况
    }
  },
  created() {
    // 获取当前订单报障状态，返回一个对象
    // status: 当前订单的状态,0代表无保障，1代表保障中 
    // flag: 待处理，处理中，处理完成
  },
  components: {
    returnUrl
  }
}

</script>
<style scoped lang="scss">
.time-line {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .box {
    background-size: cover;
    background-repeat: no-repeat;
    margin: 15px 20px;
  }
  .time-line-top {
    height: 70px;
    width: 70px;
    z-index: 100;
    background-image: url('../../../../static/img/mascot_0.png');
    position: relative;
    .tip {
      position: absolute;
      bottom: -44px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      width: 100%;
    }
    &:after {
      z-index: 10;
      content: '';
      background-color: #ccc;
      display: block;
      height: 2px;
      width: 100%;
      position: absolute;
      top: 50%;
      right: -100%;
    }
  }
  .time-line-top-none {
    &:after {
      width: auto;
    }
  }
  .time-line-mid {
    z-index: 100;
    height: 55px;
    width: 55px;
    position: relative;
    background-image: url('../../../../static/img/mascot_1.png');
    .tip {
      position: absolute;
      bottom: -26px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      width: 100%;
    }
    &:after {
      z-index: 10;
      content: '';
      background-color: #ccc;
      display: block;
      height: 2px;
      width: 100%;
      position: absolute;
      top: 50%;
      right: -100%;
    }
  }
  .time-line-bot {
    z-index: 100;
    height: 40px;
    width: 40px;
    position: relative;
    background-image: url('../../../../static/img/mascot_1.png');
    .tip {
      position: absolute;
      bottom: -33px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      width: 100%;
    }
  }
  .time-line-bot-show {
    &:after {
      z-index: 10;
      content: '';
      background-color: #ccc;
      display: block;
      height: 2px;
      width: 100%;
      position: absolute;
      top: 50%;
      right: -100%;
    }
  }
}

.text-info {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-top: 35px;
  padding: 15px 20px;
  p {
    margin-top: 5px;
    img {
      width: 50px;
      vertical-align: top;
      margin-left: 5px;
    }
  }
}

</style>
