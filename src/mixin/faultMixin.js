/**
 * 故障报修混合文件
 * 使用于equipment.vue,machine.vue文件
 */

import wx from 'weixin-js-sdk';
import { get_jssdk } from '../api/fault.js';

export default {
  data() {
    return {
      pictures: [],
      showBtn: true
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
    curAddr() {
      return this.$store.state.curAddr;
    }
  },
  created() {
    // 如果仓库地址失效了,就从新获取一遍
    if (!this.$store.state.curAddr) {
      this.$store.dispatch('SET_ADDR');
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
