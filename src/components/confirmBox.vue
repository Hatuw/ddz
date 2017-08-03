<!-- 确认对话框组件 -->
<template>
  <div id="confirmBox" v-show=" confirm ">
    <!-- 正文盒子 -->
    <div class="box">
      <i class="fa fa-times fr" aria-hidden="true" style="font-size:16px;color: rgb(152, 152, 152)" @click=" close "></i>
      <p style="text-align: center; font-size: 22px; margin: 40px 0;" v-text=" title "></p>
      <p>
        <button @click=" close " style="background-color: #0788ee;">取消</button>
        <button @click=" isTrue " style="background-color: rgb(152,152,152); color: #fff">确定</button>
      </p>
    </div>
    <!-- 遮罩层 -->
    <div class="mask"></div>
  </div>
</template>
<script>
export default {
  name: 'confirmBox',
  data() {
    return {

    }
  },
  methods: {
    // 关闭弹框
    close() {
      this.$emit('close');
    },
    // 触发确定事件
    isTrue() {
      this.$emit('isTrue');
    }
  },
  props: ['title','confirm']
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
    height: 30px;
    line-height: 30px;
    width: 49%;
    border: none;
    border-radius: 20px;
    color: #fff;
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

</style>
