<!-- 弹窗组件 -->
<template>
  <div id="alertBox" v-show=" alert ">
    <!-- 正文盒子 -->
    <div class="box">
      <p class="img-wrap" v-if=" iShow "><img src="../../static/img/tick.png" alt="完成"></p>
      <p style="text-align: center; font-size: 22px; margin-top: 5px;" v-text=" title "></p>
      <p style="text-align: center; color: rgb(160,159,159);margin: 30px 0 5px 0px;" v-text=" subTitle "></p>
      <p>
        <button @click=" close ">确定</button>
      </p>
    </div>
    <!-- 遮罩层 -->
    <div class="mask"></div>
  </div>
</template>
<script>
export default {
  name: 'alertBox',
  data() {
    return {

    }
  },
  methods: {
    // 关闭弹框
    close() {
      this.$emit('close');
    }
  },
  props: ['title', 'subTitle', 'alert','iShow']
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
  .img-wrap {
    width: 50px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  button {
    height: 30px;
    line-height: 30px;
    width: 100%;
    border: none;
    background-color: $main_color;
    color: #fff;
    border-radius: 10px;
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

</style>
