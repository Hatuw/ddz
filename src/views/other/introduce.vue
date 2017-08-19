<!-- 器材预约介绍组件 -->
<template>
  <div id="introduce">
    <returnUrl :title=" '器材介绍' " :reUrl=" '/' "></returnUrl>
    <!-- banner -->
    <div id="banner">
      <img src="../../../static/img/banner2.jpg" alt="banner">
      <p class="title">李宁7号通用篮球</p>
      <div class="line-wrap clearfix">
        <p class="line-b fl"></p> 
        <p class="line-b fr"></p>
      </div>
      <div class="line-wrap clearfix">
        <p class="line-y fl"></p>
        <p class="line-y fr"></p>
      </div>
    </div>
    <!-- 数量信息 -->
    <div id="info">
      <div>剩余:<span>0</span><span>9</span>个</div>
      <div>1元/小时</div>
    </div>
    <!-- 线 -->
    <p class="line"></p>
    <!-- 列表 -->
    <ul id="list">
      <li class="item">
        <p class="title">器材介绍<i class="fa fa-chevron-right fr rotate" aria-hidden="true" @click=" toggle "></i></p>
        <p class="item-line"></p>
        <ul class="sub-list">
          <li class="sub-item">品牌:李宁</li>
          <li class="sub-item">货号:LBQGO88</li>
          <li class="sub-item">颜色选择:橘色</li>
          <li class="sub-item">篮球材质:精</li>
          <li class="sub-item">选PU</li>
          <li class="sub-item">篮球规格: 7#</li>
          <li class="sub-item">篮球直径:24.6CM</li>
        </ul>
      </li>
      <li class="item">
        <p class="title">预定器材流程<i class="fa fa-chevron-right rotate fr" aria-hidden="true" @click=" toggle "></i></p>
        <p class="item-line"></p>
        <ul class="sub-list">
          <li class="sub-item">
            <p class="sub-item-title">1.确认位置</p>
            <p class="sub-item-tip">在首页选择所属学校和选择要预定的器材共享机器
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">2.选择器材</p>
            <p class="sub-item-tip">
              点击"预定器材"进行预定
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">3.支付押金</p>
            <p class="sub-item-tip">
              押金可退换
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">4.领取器材</p>
            <p class="sub-item-tip">
              根据"立刻运动"的操作流程即可领取器材,开始运动
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">5.预定时间</p>
            <p class="sub-item-tip">
              会提供半小时的预定时间
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">6.退换押金</p>
            <p class="sub-item-tip">
              收到设备,确认正常及完好,24小时内退换押金
            </p>
          </li>
        </ul>
      </li>
      <li class="item">
        <p class="title">立即运动流程<i class="fa fa-chevron-right rotate fr" aria-hidden="true" @click=" toggle "></i></p>
        <p class="item-line"></p>
        <ul class="sub-list">
          <li class="sub-item">
            <p class="sub-item-title">1.点击"立即运动"</p>
            <p class="sub-item-tip">
              在器材共享机器前扫描二维码进入首页即可点击
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">2.输入验证码</p>
            <p class="sub-item-tip">
              讲机器显示屏中显示的验证码输入手机
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">3.柜门开启,领取器材</p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">4.租期计算</p>
            <p class="sub-item-tip">
              器材取出时,开始租期计算。计算标准为:运动时长*1元/小时
            </p>
          </li>
        </ul>
      </li>
      <li class="item">
        <p class="title">退订流程<i class="fa fa-chevron-right fr rotate" aria-hidden="true" @click=" toggle "></i></p>
        <p class="item-line"></p>
        <ul class="sub-list">
          <li class="sub-item">
            <p class="sub-item-title">1.取消预订订单</p>
            <p class="sub-item-tip">
              进入用户界面--我的订单--即可取消订单
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">2.退换器材</p>
            <p class="sub-item-tip">
              将器材标有多东镇logo的标签对准感应区,柜门开启,将器材准确放入器材共享机器内即可。
            </p>
          </li>
          <li class="sub-item">
            <p class="sub-item-title">3.退换押金</p>
            <p class="sub-item-tip">
              进入用户界面--我的押金--根据操作指引即可退还
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <!-- 标记 -->
    <div class="tag">
      <p class="line" style="margin-right: 10px"></p>
      <p class="title">Sport King</p>
      <p class="line" style="margin-left: 10px"></p>
    </div>
    <div class="btn">
      <button>确认</button>
    </div>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
export default {
  name: 'introduce',
  data() {
    return {

    }
  },
  methods: {
    toggle(e) {
      let t = e.target;
      let subList = t.parentElement.parentElement.querySelector('.sub-list');
      if (t.classList.contains('rotate')) {
        t.classList.remove('rotate');
        subList.classList.remove('hide');
      } else {
        t.classList.add('rotate');
        subList.classList.add('hide');
      }
    }
  },
  mounted() {
    let list = document.querySelectorAll('.sub-list');
    let len = list.length - 1;
    while (len + 1) {
      list[len].style.height = getComputedStyle(list[len])['height'];
      list[len].classList.add('hide');
      --len;
    }
  },
  components: {
    returnUrl
  }
}

</script>
<style scoped lang="scss">
.btn {
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

.tag {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  .line {
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
  }
  .title {
    color: #ccc;
  }
}

#list {
  .item {
    margin-top: 25px;
    .item-line {
      background-color: #a5a5a5;
      height: 1px;
    }
    .title {
      padding: 0 20px;
      font-size: 14px;
      color: #3f97c5;
      padding-bottom: 3px;
      i {
        transform: rotate(90deg);
        transition: all .3s;
      }
      .rotate {
        transform: rotate(0deg);
      }
    }
  }
}

.sub-list {
  padding: 0 20px;
  overflow: hidden;
  transition: height .3s;
  .sub-item {
    margin-top: 7px;
    .sub-item-title {}
    .sub-item-tip {
      margin-top: 5px;
      color: #a6a6a6;
    }
  }
}

.hide {
  height: 0 !important;
}

#banner {
  img {
    width: 100%;
  }
  .title {
    font-size: 16px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    background-color: rgb(247, 247, 249);
  }
  .line-wrap {
    margin-top: 5px;
    .line-y,
    .line-b {
      height: 2px;
    }
    .line-y {
      background-color: yellow;
      width: 20%;
    }
    .line-b {
      background-color: #77b1e8;
      width: 15%;
    }
  }
}

#info {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    flex-grow: 1;
    text-align: center;
    background-color: #92d1f2;
    height: 30px;
    line-height: 30px;
    span {
      display: inline-block;
      background-color: #fff;
      color: red;
      height: 15px;
      line-height: 15px;
      margin: 0 1px;
      width: 15px;
      border-radius: 5px;
    }
  }
}

.line {
  margin-top: 3px;
  background-color: #77b1e8;
  height: 2px;
}

</style>
