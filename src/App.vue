<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
.fade-enter,.fade-leave-active {
  transform: translate3d(-100%,0,0);
}

</style>
