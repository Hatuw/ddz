/**
 * 故障报修混合文件
 * 使用于equipment.vue,machine.vue文件
 */

import wx from 'weixin-js-sdk';
import { sendRepair } from 'api/fault';
import { getUserOrder } from 'api/user';
export default {
  data() {
    return {
      selReasons: [],
      otherReason: '',
      pictures: [],
      showBtn: true,
      url: ''
    }
  },
  methods: {
    // 选择保障原因
    chooseReason(reason, e) {
      if (e.target.tagName.toLocaleLowerCase() == 'i') {
        let i = e.target;
        if (i.classList.contains('fa-circle-thin')) {
          this.selReasons.push(reason);
          i.classList.remove('fa-circle-thin');
          i.classList.add('fa-check-circle');
        } else {
          this.selReasons.splice(this.selReasons.indexOf(reason),1);
          i.classList.remove('fa-check-circle');
          i.classList.add('fa-circle-thin');
        }
      }
    },

    // 选择图片
    _chooseImage() {
      const _self = this;
      wx.ready(() => {
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
            _self.pictures.push(res.localIds[0]);
            if (_self.pictures.length >= 4) {
              _self.showBtn = false;
            }
            var localIds = res.localIds;
            setTimeout(() => {
              wx.uploadImage({
                localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function(res) {
                  _self.url = res.serverId; // 返回图片的服务器端ID
                }
              });
            }, 500);
          }
        });
      })
    }
  },
  computed: {
    curAddr() {
      return this.$store.state.curAddr;
    },
    user() {
      return this.$store.state.user;
    },
    order() {
      return this.$store.state.userOrder;
    }
  },
  created() {
    // 如果仓库地址失效了,就从新获取一遍
    if (!this.$store.state.curAddr) {
      this.$store.dispatch('SET_ADDR');
    };
  },
  mounted() {
    document.querySelector('#app').style.backgroundColor = '#eaeef1';
  }
}
