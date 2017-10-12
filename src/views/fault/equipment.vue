<!-- 器材故障组件 -->
<template>
  <div id="equipment">
    <returnUrl :title=" '器材故障' " :reUrl=" 'fault' "></returnUrl>
    <img :src=" url ">
    <form @submit.prevent>
      <!-- 机器位置id信息 -->
      <div class="form-group">
        <h4>我的器材</h4>
        <div class="info">
          <div class="info-img">
            <img src="../../../static/img/basketball.png" alt="我的运动">
          </div>
          <div class="info-text">
            <p>篮球</p>
            <p style="margin-top: 5px">已用时: 01:28:15</p>
            <p style="margin-top: 5px">需缴费用: 1.5元</p>
          </div>
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
          <textarea placeholder="请输入故障内容" v-model.trim=" otherReason ">
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
          <div id="addBtn" class="fl" v-show=" showBtn " @click.stop="_chooseImage">
            <img src="../../../static/img/add.png" alt="添加图片">
          </div>
        </div>
      </div>
      <!-- 提交按钮 -->
      <div class="form-group">
        <div class="sendBtn">
          <button @click.stop="sendSportRepair">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import faultMixin from '@/mixin/faultMixin.js';
import returnUrl from '@/components/returnUrl';
import { sendRepair } from 'api/fault';
export default {
  name: 'equipment',
  mixins: [faultMixin],
  title: '器材故障',
  components: {
    returnUrl
  },
  data() {
    return {
      reasons: ['text1', 'text2', 'text3', 'text4']
    }
  },
  methods: {
    // 发送体育器材故障
    sendSportRepair() {
      this._uploadImage()
        .then(() => {
          alert(this.urls.length);
          const fromObj = {
            tp: 'sport',
            phone: this.user.user_id,
            oId: this.order.order_id,
            issue: this.selReasons.toString(),
            otherIssue: this.otherReason,
            images: this.urls
          };
          sendRepair(fromObj)
            .then((res) => {
              console.log(res);
            })
        })
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    padding: 10px 20px;
    background-color: #fff;
    .info-img {
      flex-basis: 75px;
      img {
        width: 100%;
      }
    }
    .info-text {
      flex-grow: 2;
      margin-left: 15px;
    }
  }
  .reason {
    padding: 0 20px;
    .reason-item {
      margin-top: 10px;
      width: 50%;
      max-width: 250px;
      .fa {
        font-size: 14px;
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
