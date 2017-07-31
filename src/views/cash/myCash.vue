<!-- 我的押金组件 -->
<template>
  <div id="cash">
  	<return-url :title=" '我的押金' " :reUrl=" '/' "></return-url>
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
      <i class="fa fa-clock-o" style="color: #0788ee"></i>
      押金退还时间为一天
    </div>
    <!-- 体现按钮 -->
    <div class="pay-btn">
      <button>我要提现</button>
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
      money: '50.00'
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

</style>
