<!-- 个人中心预约组件 -->
<template>
  <div id="appoinment">
    <!-- 顶部标题栏目 -->
    <returnUrl :title=" '我的预约' " :reUrl=" '/personal' "></returnUrl>
    <article>
      <p class="order-number">订单编号: 2234234234234</p>
      <div class="order-info">
        <div class="order-info-img">
          <img src="../../../static/img/pingpong_c.png">
        </div>
        <div class="order-info-data">
          <h3 style="color: #4c4c4c">乒乓球拍</h3>
          <p>
            <i class="fa fa-map-marker" aria-hidden="true" style="color: #8d8d8d"></i>
            <span class="data-pos" style="color: #8d8d8d">广东轻工职业技术学院南海校区</span>
          </p>
          <p style="color: #8d8d8d">2017年10月1日</p>
          <p style="color: #8d8d8d">17:20:22</p>
          <p>预约还剩: <span style="color: red">02:20:17</span></p>
          <div style="text-align: right">
            <span id="cancelBtn">取消预订</span>
            <span id="sportBtn">立即运动</span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl'
export default {
  name: 'appoinment',
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
article {
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
      p {
        margin-bottom: 2px;
      }
      margin-left: 5px;
      flex-grow: 1;
      #cancelBtn {
        margin-right: 5px;
        color: #8d8d8d;
      }
      #sportBtn {
        background-color: #0788ee;
        color: #fff;
        display: inline-block;
        padding: 5px 10px;
        border-radius: 20px;
      }
    }
  }
}

</style>
