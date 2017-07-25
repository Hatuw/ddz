<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: all .3s ease;
}
.component-fade-enter,.component-fade-leave-active {
  transform: translate3d(-100%,0,0);
}

</style>
