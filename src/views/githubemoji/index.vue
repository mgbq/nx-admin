<template>
    <div id='emoji' class="app-container">
        <p class="warn-content">
            <a href="https://github.com/windiest/github-emoji" target="_blank">github-emoji组件参考github-emoji
            </a>
        </p>
        <index></index>
    </div>
</template>

<script >
import index from '@/components/nx-github-emoji/index'
export default {
  name: 'countenance',
  components: {
    index
  }

}
</script>

<style>
</style>
