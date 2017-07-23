<!-- 机器故障组件 -->
<template>
  <div id="machine">
    <form @submit.prevent>
      <!-- 机器位置id信息 -->
      <div class="form-group">
        <h4>机器故障</h4>
        <div class="info">
          <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span class="pos" v-if=" pos.province ">{{ pos.city }}{{ pos.district }}{{ pos.addr }}</span>
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
            <img src="../../../static/img/add.png" alt="添加图片">
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
import wx from 'weixin-js-sdk';
import { get_jssdk } from '../../api/fault.js';
export default {
  name: 'machine',
  title: '机器故障',
  data() {
    return {
      pictures: [],
      showBtn: true,
      reasons: ['显示不了验证码', '没有语音提醒', 'nfc开不了门', '上不了锁']
    }
  },
  methods: {
    chooseReason(reason, e) {
      if (e.target.tagName.toLocaleLowerCase() == 'i') {
        let i = e.target;
        if (i.classList.contains('fa-circle-thin')) {
          i.classList.remove('fa-circle-thin');
          i.classList.add('fa-check-circle');
        } else {
          i.classList.remove('fa-check-circle');
          i.classList.add('fa-circle-thin');
        }
      }
    }
  },
  computed: {
    pos() {
      return this.$store.state.pos;
    }
  },
  created() {
    // 如果仓库地址失效了,就从新获取一遍
    if (!this.$store.state.pos.province) {
      this.$store.dispatch('GET_ADDR');
    };
  },
  mounted() {
    let _self = this;

    document.body.style.backgroundColor = '#f7f7f9';

    let data = {
      noncestr: 'duodongzhen',
      timestamp: +new Date(),
      url: window.location.href.split('#')[0],
      jsApiList: ['chooseImage']
    }

    get_jssdk(data)
      .then((res) => {
        wx.config({
          debug: false,
          appId: res.data.appId,
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.noncestr, // 必填，生成签名的随机串
          signature: res.data.signature, // 必填，签名，见附录1
          jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(() => {
          document.querySelector('#addBtn').onclick = () => {
            wx.chooseImage({
              count: 1, // 默认9
              sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
              success: function(res) {
                _self.pictures.push(res.localIds[0]);
                if (_self.pictures.length >= 4) {
                  _self.showBtn = false;
                }
              }
            });
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
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
    border-top: 1px solid $line;
    border-bottom: 1px solid $line;
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
    border-top: 1px solid $line;
    border-bottom: 1px solid $line;
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
