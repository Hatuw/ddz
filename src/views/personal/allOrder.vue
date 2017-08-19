<!-- 个人所有订单组件 -->
<template>
  <div id="appoinment">
    <!-- 顶部标题栏目 -->
    <returnUrl :title=" '历史订单' " :reUrl=" '/personal' "></returnUrl>
    <ul class="order-list">
      <li v-for=" (item,index) in orders " :key=" index " class="order-item">
        <p class="order-number">订单编号: {{ item.number }}</p>
        <div class="order-info">
          <div class="order-info-img colum">
            <img src="../../../static/img/pingpong_c.png">
          </div>
          <div class="order-info-data colum">
            <h3 style="color: #4c4c4c">乒乓球拍</h3>
            <p>
              <i class="fa fa-map-marker" aria-hidden="true" style="color: #8d8d8d"></i>
              <span class="data-pos" style="color: #8d8d8d">{{ item.school }}</span>
            </p>
            <p style="color: #8d8d8d">{{ item.date }}</p>
            <p style="color: #8d8d8d">开始时间: {{ item.createTime }}</p>
            <p style="color: #8d8d8d">结束时间: {{ item.endTime }}</p>
            <div class="clearfix">
              <span style="vertical-align: -webkit-baseline-middle;">金额:￥<strong style="color: red">{{ item.money }}</strong></span>
              <span id="delBtn" class="fr">删除订单</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl'
export default {
  name: 'appoinment',
  data() {
    return {
      orders: [{ 
        number: 123123123,
        type: '乒乓球',
        school: '广东轻工职业技术学院',
        date: '2017-01-09',
        createTime: '15:00:01',
        endTime: '15:30:04',
        money: 3
       }]
    }
  },
  components: {
    returnUrl
  }
}

</script>
<style scoped lang="scss">
.order-item {
  margin: 10px 20px;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #fff;
  max-width: 376px;
  @media (min-width: 376px) {
    margin: 10px auto;
  }
  .order-number {
    color: #8d8d8d;
  }
  .order-info {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .colum {}
    .order-info-img {
      flex-basis: 60px;
      img {
        width: 100%;
        max-width: 60px;
      }
    }
    .order-info-data {
      margin-left: 5px;
      flex-grow: 1;
      #delBtn {
        background-color: #8d8d8d;
        color: #fff;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 20px;
      }
    }
  }
}

</style>
