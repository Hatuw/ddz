<!-- 关于多动朕组件 -->
<template>
  <div id="about">
    <returnUrl :title=" '关于多动朕' " :reUrl=" '/personal' "></returnUrl>
    <div class="text">
      多动朕——体育器材共享平台是基于微信服务号进行深度开发web网站服务平台，主要提供“一元租借”和“器材共享”服务。以体育器材共享机器的方式解决大学生运动的想运动无器材等问题，降低用户的运动门槛和运动成本，让更多的人走出室内，推动全民运动，解决“亚健康”、“懒运动”问题
    </div>
  </div>
</template>
<script>
import returnUrl from '@/components/returnUrl';
export default {
  name: 'about',
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
	.text {
		padding: 10px 20px;
		line-height: 1.5em;
	}
</style>
