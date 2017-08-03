<!-- 退还押金组件 -->
<template>
  <div id="cash">
    <return-url :title=" '退还押金' " :reUrl=" '/myCash' "></return-url>
    <!-- 提示文字 -->
    <div class="tip-text">
      请选择退押金原因
    </div>
    <!-- 原因 -->
    <div class="note-text">
      <ul>
        <li v-for=" rea in reasons " :key=" rea ">
          <i class="fa fa-circle-thin icon" aria-hidden="true" @click=" chooseReason
          (rea,$event) "></i>
          <span v-text=" rea "></span>
        </li>
      </ul>
    </div>
    <!-- 按钮组 -->
    <div class="pay-btn">
      <router-link :to=" '/myCash' ">
        <button>暂时不退</button>        
      </router-link>
      <button @click=" showCfm ">退押金</button>
    </div>
    <alertBox :title=" '申请退款成功!' " :subTitle=" '将在1-2个工作日原路退回支付账户' " :alert=" alert " @close=" close('alert') "></alertBox>
    <confirmBox :title=" '你确定要退款吗' " :confirm=" confirm " @close=" close('confirm') " @isTrue=" getCash "></confirmBox>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
import alertBox from '@/components/alertBox';
import confirmBox from '@/components/confirmBox';
export default {
  name: 'cash',
  title: '押金',
  data() {
    return {
      alert: false,
      confirm: false,
      money: '50.00',
      reasons: ['想运动，但经常租不到器材', '习惯在需要运动时，再充值押金', '放假或毕业离开学校', '机器操作流程复杂，等待时间太长', '运动器材的体验感不够好', '其他']
    }
  },
  methods: {
    // 显示对话框
    showCfm() {
      this.confirm = true;
    },
    // 关闭弹框
    close(a) {
      this[a] = false;
    },
    // 发起退换押金请求
    getCash() {
      this.confirm = false;
      this.alert = true;
    },
    // 选择退款原因
    chooseReason(rea, e) {
      let i = e.target;
      if (i.classList.contains('fa-circle-thin')) {
        i.classList.remove('fa-circle-thin');
        i.classList.add('fa-check-circle');
      } else {
        i.classList.remove('fa-check-circle');
        i.classList.add('fa-circle-thin');
      }
    }
  },
  components: {
    returnUrl,
    alertBox,
    confirmBox
  }
}

</script>
<style scoped lang="scss">
$main_color: #0788ee;

.tip-text {
  padding: 10px 20px;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}

.m-text {
  font-size: 32px;
}

.note-text {
  ul {
    margin-top: 20px;
    li {
      padding: 5px 20px;
      i {
        color: #ccc;
        font-size: 18px;
        vertical-align: middle;
      }
      .fa-check-circle {
        color: #0788ee;
      }
    }
  }
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
