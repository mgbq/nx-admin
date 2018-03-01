<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar :routes="routes"></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue'
    import vSidebar from './Sidebar.vue'
    import store from '@/store'
    export default {
      components: {
        vHead, vSidebar
      },
  computed: {
        routes() {
          return store.getters.routers
          // return this.$router.options.routes
        }
  }
    }
</script>
