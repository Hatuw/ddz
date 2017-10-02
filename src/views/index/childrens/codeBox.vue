<!-- 弹窗组件 -->
<template>
  <div id="codeBox" v-show=" show ">
    <!-- 正文盒子 -->
    <form @submit.prevent class="box">
      <div style="font-size: 16px; margin-top: 5px;">输入机器屏幕中显示的验证码即可开箱领取器材</div>
      <div id="inp-wrap">
        <p class="clearfix">
          <input type="number" class="inp" v-model.trim=" num.o " @input=" write('#o',$event) " id="o" autocomplete="off">
          <input type="number" class="inp" v-model.trim=" num.t " @input=" write('#t',$event) " @keyup.delete=" del " @click=" check " id="t" autocomplete="off">
        </p>
      </div>
      <div>
        <button @click.stop=" checkCode ">确定</button>
      </div>
    </form>
    <!-- 遮罩层 -->
    <div class="mask"></div>
  </div>
</template>
<script>
import { check_code, createOrder } from 'api/index';
import { getUserOrder } from 'api/user';
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
  computed: {
    user() {
      return this.$store.state.user;
    },
    sport() {
      return this.$store.state.sport;
    }
  },
  methods: {
    del() {
      if (!this.num.t) {
        document.querySelector('#o').focus();
        this.num.o = null;
      }
    },
    write(id, e) {
      if (id == '#o') {
        let val = e.target.value;
        if (val.length >= 1) {
          this.num.o = this.num.o.substr(0, 1);
          document.querySelector('#t').focus();
        }
      } else {
        let val = e.target.value;
        if (val.length == 0) {
          document.querySelector('#o').focus();
        }
        if (val.length > 1) {
          this.num.t = this.num.t.substr(0, 1);
        }
      }
    },
    check() {
      if (!this.num.o) {
        document.querySelector('#o').focus();
      }
    },
    checkCode() {
      if (!this.num.o || !this.num.t) return;
      const code = '' + this.num.o + this.num.t;
      check_code(code, this.user.user_id)
        .then((res) => {
          if (res.data.status == 1) {
            this.num.o = '';
            this.num.t = '';
            createOrder(this.user.user_id, this.sport.device_id,this.sport.sCode)
              .then((res) => {
                this.$emit('createOrder');
              })
              .catch((err) => {
                throw err;
              })
          }
        })
        .catch((err) => {
          throw err;
        })
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
