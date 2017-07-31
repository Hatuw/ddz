<!-- 注册组件 -->
<template>
  <div id="Register">
    <move-slider :oLeft=" 194 " :silderShow=" silderShow " @getCode=" _getCode "></move-slider>
    <agreement-book :bookShow=" bookShow " @hide=" showBook(false) "></agreement-book>
    <!-- 顶部banner图 -->
    <header>
      <img src="../../assets/banner.png" alt="多动朕图标">
    </header>
    <!-- 用户表单 -->
    <article>
      <form @submit.prevent>
        <!-- 填写手机号 -->
        <div class="form-group">
          <div class="phoneBtn-wrap">
            <i class="fa fa-mobile" aria-hidden="true"></i>
            <input type="text" class="inp phoneBtn" placeholder="请输入手机号" v-model=" phoneVal " @focus=" clearError " :disabled=" sended ">
          </div>
        </div>
        <p class="error-text" v-text=" phone_error "></p>
        <!-- 填写验证码 -->
        <div class="form-group">
          <div class="codeBtn-wrap">
            <i class="fa fa-lock" aria-hidden="true"></i>
            <input type="text" class="inp codeBtn" placeholder="请输入验证码" v-model=" codeVal " @focus=" clearError ">
          </div>
          <div class="sendCodeBtn-wrap">
            <button class="btn sendCodeBtn" :class=" { disabled: sended } " @click=" _checkCode " :disabled=" sended ">
              <span v-if=" !sended ">发送验证码</span>
              <span v-else> 已发送({{ endTime}} s) </span>
            </button>
          </div>
        </div>
        <p class="error-text" v-text=" code_error "></p>
        <!-- 登录按钮 -->
        <div class="form-group">
          <button class="btn loginBtn" @click=" sendCode ">注册/登录</button>
        </div>
        <!-- 阅读协议 -->
        <div class="form-group">
          <p class="tip-text">注册即表示您已阅读,并同意
            <span class="agreementBook" @click=" showBook(true) ">《多动朕用户协议》</span>
          </p>
        </div>
      </form>
    </article>
    <!-- 遮罩层 -->
    <div class="mask" v-if=" silderShow "></div>
  </div>
</template>
<script>
import agreementBook from './childrens/agreementBook.vue';
import moveSlider from './childrens/moveSlider.vue';
import { getCode,checkCode } from '../../api/register.js';
export default {
  name: 'Register',
  data() {
    return {
      phoneVal: '',
      codeVal: '',
      phone_error: '',
      code_error: '',
      sended: false, // 是否已经发送验证码
      endTime: 60, // 倒计时
      bookShow: false, // 是否显示用户协议
      silderShow: false // 是否显示移动滑动库
    }
  },
  methods: {
    // 检查和手机格式以及控制移动滑块的显示
    _checkCode() {
      // 先判断手机格式是否正确
      if (!(/^(1[34578]\d{9})$/ig.test(this.phoneVal))) {
        this.phone_error = '请检查手机格式';
        return false;
      }
      // 显示移动滑块
      this.silderShow = true;
    },

    // 向服务器发起获取验证码请求
    _getCode() {
      this.silderShow = false;
      getCode(this.phoneVal)
      .then((res) => {
        this.countDown();
        this.sended = true;
      })
      .catch((err) => {
        throw err;
      })
    },

    // 倒计时
    countDown() {
      // 获取验证码之后，倒计时60s，60s之后可以重新发送
      let timer = null;
      timer = setInterval(() => {
        if (this.endTime <= 0) {
          this.sended = false;
          this.endTime = 60;
          clearInterval(timer);
          return;
        }
        this.endTime--;
      }, 1000);
    },
    // 向服务器发起验证验证码请求
    sendCode() {
      // 先检查是否能执行请求
      if (!this.sended) {
        this.phone_error = '请先填写手机号码';
        return;
      } else if (this.codeVal == '') {
        this.code_error = '请检查验证码是否输入';
        return
      }

      checkCode(this.codeVal)
      .then((res) =>{
        // 根据返回的状态码，来判断验证码是否正确
        let state = res.data.state; // 返回的状态码
        // 如果返回的状态码是true的话，就进行页面的跳转
        // 如果返回的状态码是false的话，就提示错误文字
        if (state) {
          console.log('验证码正确，本地存储openId');
          localStorage.setItem('openId',res.data.openId);
          this.$router.push('/');
        } else {
          this.code_error = '验证码错误,请重新填写验证码';
        }
      })
      .catch((err) => {
        throw err;
      })
    },
    // 清除所有错误文字
    clearError() {
      this.phone_error = '';
      this.code_error = '';
    },
    // 控制协议书显示隐藏
    showBook(flag) {
      this.bookShow = flag;
    }
  },
  components: {
    agreementBook,
    moveSlider
  }
}

</script>
<style scoped lang="scss">
$main_color: #0788ee;
$error_color: #dc4949;
$gray_color: #a6a6a6;

form {
  margin-top: 25px;
  .error-text {
    padding: 0 20px;
    color: $error_color;
  }
  .tip-text {
    text-align: center;
    color: $gray_color;
    margin: 15px 0 10px;
    width: 100%;
    .agreementBook {
      color: #086eef;
    }
  }
}

header {
  img {
    width: 100%;
    height: auto;
  }
}

.form-group {
  // 输入框
  .inp {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    height: 42px;
    outline: none;
    border: none;
    background-color: #fff;
    color: $gray_color;
  } // 按钮
  .btn {
    width: 100%;
    border: none;
    background-color: $main_color;
    color: #fff;
    border-radius: 10px;
  }
  padding: 0 20px;
  max-width: 100%;
  margin-bottom: 5px;
  display: flex;
  align-items: flex-end;
  .phoneBtn-wrap {
    // 手机包裹层
    flex: 1;
    position: relative;
    border-bottom: 1px solid;
    padding-left: 4em;
    .fa-mobile {
      position: absolute;
      top: 5px;
      left: 15px;
      color: $main_color;
      font-size: 34px;
    }
    .phoneBtn {}
  }
  .codeBtn-wrap {
    // 验证码包裹层
    flex: 2;
    position: relative;
    padding-left: 4em;
    margin-right: 5px;
    border-bottom: 1px solid;
    .fa-lock {
      position: absolute;
      top: 12px;
      left: 15px;
      color: $main_color;
      font-size: 26px;
    }
    .codeBtn {
      width: 90%;
    }
  }
  .sendCodeBtn-wrap {
    // 发送验证码包裹层
    flex: 1;
    .sendCodeBtn {
      height: 30px;
      &:focus {
        outline: none
      }
    }
    .disabled {
      background-color: #95b4d3;
    }
  }
  .loginBtn {
    // 登录按钮包裹层
    margin-top: 20px;
    box-shadow: 0px 10px 18px -7px $main_color;
    height: 35px;
    font-size: 16px;
    &:focus {
      outline: none
    }
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .6);
}

</style>
