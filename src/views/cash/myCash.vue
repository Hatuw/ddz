<!-- 我的押金组件 -->
<template>
  <div id="cash">
    <return-url :title=" '我的押金' " :reUrl=" '/' "></return-url>
    <div v-if=" flag ">
      <!-- 押金金额 -->
      <div class="tip-text">
        押金金额
        <span>(元)</span>
      </div>
      <!-- 价钱 -->
      <div class="m-text">
        {{ money }}
      </div>
      <!-- 押金须知 -->
      <div class="note-text">
        <i class="fa fa-clock-o" style="color: #0788ee"></i> 押金退还时间为一天
      </div>
      <!-- 体现按钮 -->
      <div class="pay-btn">
        <router-link :to=" '/reCash' ">
          <button>我要提现</button>
        </router-link>
      </div>
    </div>
    <div v-else>
      <div class="cartoon-wrap"><img src="../../../static/img/cartoon.png" alt="吉祥物"></div>
      <p style="text-align: center;color: #878787;margin-top: 15px;">还未交押金哦，无法享受平台服务</p>
      <p style="text-align: center;">
        <button class="btn">去充押金</button>
      </p>
    </div>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
export default {
  name: 'myCash',
  title: '押金',
  data() {
    return {
      money: '50.00',
      flag: true
    }
  },
  components: {
    returnUrl
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
  margin-top: 20px;
  padding: 0 20px;
}

.pay-btn {
  margin-top: 20px;
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
    font-size: 16px;
    &:focus {
      outline: none
    }
  }
}

.cartoon-wrap {
  img {
    width: 170px;
    display: block;
    margin: auto;
  }
}

.btn {
  width: 58%;
  max-width: 185px;
  border: none;
  background-color: rgb(17, 136, 233);
  color: #fff;
  border-radius: 20px;
  margin-top: 10px;
  box-shadow: 0px 10px 18px -7px #ccc;
  height: 35px;
  font-size: 16px;
}

</style>
