<!-- 意见组件 -->
<template>
  <div id="opinion">
    <returnUrl :title=" '意见反馈' " :reUrl=" '/personal' "></returnUrl>
    <form @submit.prevent>
      <!-- 机器其他故障原因 -->
      <div class="form-group">
        <div class="other-reason">
          <textarea placeholder="我还想说点什么...尽情吐槽吧">
          </textarea>
        </div>
      </div>
      <!-- 提交按钮 -->
      <div class="form-group">
        <div class="sendBtn">
          <button>提交意见</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
export default {
  name: 'opinion',
  data() {
    return {

    }
  },
  components: {
    returnUrl
  }
}

</script>
<style scoped lang="scss">
$line: #a6a6a6;
$blue: #0788ee;
.form-group {
  margin-top: 10px;
  .other-reason {
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
      border-radius: 20px;
    }
  }
}

</style>
