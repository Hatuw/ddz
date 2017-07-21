<!-- 移动滑块 -->
<template>
  <div id="MoveSlider" v-if=" silderShow ">
    <!-- 拼图包裹层 -->
    <div class="img-wrap">
      <img src="../../../assets/puzzle_bg.png" alt="移动滑块背景图片" class="img-pic">
      <div class="puzzle-wrap">
        <img src="../../../assets/puzzle_block.png" alt="移动滑块" class="puzzle-block">
      </div>
    </div>
    <!-- 滑块包裹层 -->
    <div class="silder-wrap">
      <div class="silder-box">
        <img src="../../../assets/slider_btn.png" alt="滑动按钮" class="silder-btn">
      </div>
      <p class="silder-tip">
        按住左边滑块,拖动完成上方拼图
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MoveSlider',
  data() {
    return {
      state: false,
      left: 0,
      currentX: 0,
      flag: false,
      barStartLeft: 0,
      targetStartLeft: 0
    }
  },
  props: {
    oLeft: {
      type: Number,
      required: true
    },
    silderShow: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    silderShow(nVal, oVal) {
      if (nVal) {
        this.$nextTick(() => {
          let bar = document.querySelector('.silder-box'); // 把手
          let target = document.querySelector('.puzzle-wrap'); // 拼图

          // 先记录一下要移动的栏目的初始位置
          this.barStartLeft = this.getCss(bar, 'left');
          this.targetStartLeft = this.getCss(target, 'left');

          // 初始化事件
          this.drag(bar, target);
        });
      }
    }
  },
  methods: {
    // 获取相关CSS属性
    getCss(o, key) {
      return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
    },
    // 拖动原理
    drag(bar, target, callback) {
      let _self = this;
      if (this.getCss(target, 'left') !== 'auto') {
        this.left = this.getCss(target, 'left');
      }

      // touch事件开始
      bar.addEventListener('touchstart', (e) => {
        _self.flag = true; // 改变拖拽状态为拖拽中
        e.preventDefault(); // 阻止触摸时页面的滚动和缩放
        target.style.transition = '';
        bar.style.transition = '';
        _self.currentX = e.touches[0].clientX;
      });

      // touch事件结束
      bar.addEventListener('touchend', (e) => {
        // 当拖动结束后判断是否拼图正确
        // 如果正确就发送获取验证码请求
        let finalL = parseInt(target.style.left);
        if (finalL + 1 == _self.oLeft || _self.oLeft == finalL - 1 || _self.oLeft == finalL) {
          this.$emit('getCode');
          return;
        }

        // 如果不正确，位置偏移回原来的位置
        // 回退的时候添加过渡效果
        target.style.transition = 'left .5s ease-out';
        bar.style.transition = 'left .5s ease-out';
        target.style.left = _self.targetStartLeft;
        bar.style.left = _self.barStartLeft;
        _self.flag = false;
      });

      // touch事件结束
      bar.addEventListener('touchmove', (e) => {
        e.preventDefault();
        // 如果当前状态是拖动中的
        if (_self.flag) {
          let nowX = e.touches[0].clientX;
          let disX = nowX - _self.currentX;

          let maxLeft = parseInt(_self.getCss(bar.parentElement, 'width')) - parseInt(_self.getCss(bar, 'width'));

          // 如果移动的距离少于barStartLeft
          // 或者大于silder-wrap的宽度 - barStartLeft就固定在边缘上
          if (disX <= parseInt(_self.barStartLeft)) {
            target.style.left = _self.targetStartLeft;
          } else if (disX >= maxLeft) {
            bar.style.left = `${ maxLeft }px`;
          } else {
            target.style.left = `${ parseInt(_self.left) + disX }px`;
            bar.style.left = `${ disX }px`;
          }
        }
      });
    }
  },
  mounted() {

  }
}

</script>
<style scoped lang="scss">
// 总包裹层
#MoveSlider {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 300px;
}

// 拼图包裹层
.img-wrap {
  padding: 10px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  .img-pic {
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
  }
  .puzzle-wrap {
    width: 58px;
    position: absolute;
    top: 57px;
    left: 22px;
    .puzzle-block {
      width: 100%;
      max-width: 100%;
    }
  }
}

// 滑块包裹层
.silder-wrap {
  background-color: #f7f7f7;
  width: 250px;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0;
  border-radius: 15px;
  position: relative;
  .silder-box {
    width: 40px;
    position: absolute;
    top: -5px;
    left: 0px;
    .silder-btn {
      width: 100%;
    }
  }
  .silder-tip {
    margin-left: 15px;
  }
}

</style>
