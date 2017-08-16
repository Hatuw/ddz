<!-- 机器故障组件 -->
<template>
  <div id="machine">
    <returnUrl :title=" '机器故障' " :reUrl=" 'fault' "></returnUrl>
    <form @submit.prevent>
      <!-- 机器位置id信息 -->
      <div class="form-group">
        <h4>机器故障</h4>
        <div class="info">
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span class="pos" v-if=" curAddr " v-text=" curAddr "></span>
            <span class="pos" v-else>正在定位...</span>
          </p>
          <p style="margin-top: 5px">机器id:KSDFF213</p>
        </div>
      </div>
      <!-- 机器故障4个基本原因 -->
      <div class="form-group">
        <h4>故障原因</h4>
        <div class="reason clearfix">
          <ul class="fl">
            <li v-for=" item in reasons " :key=" item " class="reason-item fl" @click=" chooseReason(item,$event) ">
              <i class="fa fa-circle-thin icon" aria-hidden="true"></i>
              <span v-text=" item "></span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 机器其他故障原因 -->
      <div class="form-group">
        <h4>其他原因</h4>
        <div class="other-reason">
          <textarea placeholder="请输入故障内容">
          </textarea>
          <span>0/200</span>
        </div>
      </div>
      <!-- 机器故障图片 -->
      <div class="form-group">
        <h4>添加图片</h4>
        <div class="picList-wrap">
          <ul class="picList">
            <li class="item fl" v-for=" pic in pictures ">
              <img :src=" pic " alt="故障图片">
            </li>
          </ul>
          <div id="addBtn" class="fl" v-show=" showBtn ">
            <img src="../../../../static/img/add.png" alt="添加图片">
          </div>
        </div>
      </div>
      <!-- 提交按钮 -->
      <div class="form-group">
        <div class="sendBtn">
          <button>提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import faultMixin from '@/mixin/faultMixin.js';
import returnUrl from '@/components/returnUrl';
export default {
  name: 'machine',
  title: '机器故障',
  mixins: [faultMixin],
  components: {
    returnUrl
  },
  data() {
    return {
      reasons: ['显示不了验证码', '没有语音提醒', 'nfc开不了门', '上不了锁']
    }
  }
}

</script>
<style scoped lang="scss">
$line: #a6a6a6;
$blue: #0788ee;
.form-group {
  margin-top: 10px;
  h4 {
    padding: 0 20px;
  }
  .info {
    margin-top: 5px;
    padding: 10px 20px;
    background-color: #fff;
    .fa {
      color: $blue;
    }
    .pos {
      margin-left: 5px;
      display: inline-block;
      width: 90%;
      vertical-align: top;
    }
  }
  .reason {
    padding: 0 20px;
    .reason-item {
      margin-top: 10px;
      width: 50%;
      max-width: 250px;
      .fa {
        font-size: 16px;
        vertical-align: text-bottom;
      }
      .fa-check-circle {
        color: $blue;
      }
    }
  }
  .other-reason {
    position: relative;
    margin-top: 5px;
    padding: 5px 20px 15px;
    background-color: #fff;
    textarea {
      outline: none;
      width: 100%;
      height: 70px;
      border: none;
      resize: none;
    }
    span {
      position: absolute;
      bottom: 2px;
      right: 23px;
    }
  }
  .picList-wrap {
    padding: 0 20px;
    .picList {
      margin: 5px 0;
      .item {
        width: 24%;
        margin-left: 3px;
        img {
          width: 100%;
        }
      }
    }
    #addBtn {
      width: 70px;
      img {
        width: 100%;
      }
    }
  }
  .sendBtn {
    padding: 0 20px;
    button {
      margin-top: 5px;
      width: 100%;
      border: none;
      height: 35px;
      line-height: 35px;
      background-color: $blue;
      color: #fff;
      border-radius: 5px;
    }
  }
}

</style>
