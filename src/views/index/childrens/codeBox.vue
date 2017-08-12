<!-- 弹窗组件 -->
<template>
  <div id="codeBox" v-show=" show ">
    <!-- 正文盒子 -->
    <form @submit.prevent class="box">
      <div style="font-size: 16px; margin-top: 5px;">输入机器屏幕中显示的验证码即可开箱领取器材</div>
      <div id="inp-wrap">
        <p class="clearfix">
          <input type="number" class="inp" v-model.trim=" num.o " @input=" o_write " id="o" autocomplete="off">
          <input type="number" class="inp" v-model.trim=" num.t " @input=" t_write " @click=" check " id="t" autocomplete="off">
        </p>
        <p style="text-align: center;margin-top: 5px;color: #878787">重新获取(60s)</p>
      </div>
      <div>
        <button>确定</button>
      </div>
    </form>
    <!-- 遮罩层 -->
    <div class="mask"></div>
  </div>
</template>
<script>
export default {
  name: 'codeBox',
  data() {
    return {
      num: {
        o: null,
        t: null
      }
    }
  },
  methods: {
    o_write(e) {
      let val = e.target.value;
      if (val.length >= 1) {
        this.num.o = this.num.o.substr(0, 1);
        document.querySelector('#t').focus();
      }
    },
    t_write(e) {
      let val = e.target.value;
      if (val.length == 0) {
        document.querySelector('#o').focus();
      }
      if (val.length > 1) {
        this.num.t = this.num.t.substr(0, 1);
      }
    },
    check() {
      if(!this.num.o) {
        document.querySelector('#o').focus();
      }
    }
  },
  props: ['show']
}

</script>
<style scoped lang="scss">
$main_color: #0788ee;
.box {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 15px 15px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: #fff;
  width: 75%;
  max-width: 320px;
  button {
    height: 35px;
    line-height: 35px;
    width: 100%;
    border: none;
    background-color: $main_color;
    color: #fff;
    border-radius: 10px;
    outline: none;
  }
}

.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
}

#inp-wrap {
  text-align: center;
  margin: 10px 0;
  .inp {
    width: 45px;
    height: 45px;
    line-height: 45px;
    border: 1px solid $main_color;
    outline: none;
    text-align: center;
    font-size: 18px;
  }
}

</style>
