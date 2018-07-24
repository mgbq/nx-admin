<template>
  <div id="app">
    <!--登入动画-->
    <transition name="rotate-fall">
    <router-view  class="app-router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import 'vue-transition.css'
export default {
  name: 'App'
}

</script>
<style>
<<<<<<< HEAD
 
 
=======
>>>>>>> f9964819812c39751323f6a1d3a99c7087e41f36
  .app .app-router-view {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    transform-style: preserve-3d;
    visibility: visible;
  }
</style>
