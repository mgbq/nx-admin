<template>
  <div class="errPage-container">
    <errorA></errorA>
    <errorB></errorB>
    <!-- $t is vue-i18n global function to translate lang -->
    <h3>{{$t('errorLog.tips')}}</h3>
    <code>
      {{$t('errorLog.description')}}
      <a target="_blank" class="link-type" href="https://mgbq.github.io/nx-admin-site/guide/advanced/error.html">
        {{$t('errorLog.documentation')}}
      </a>
    </code>
    <a href="#">
      <img src='https://mgbq.github.io/onlinePreview/nxmin-errorLog.gif' style="width:90%;">
    </a>
  </div>
</template>

<script>
import errorA from './errorTestA'
import errorB from './errorTestB'

export default {
  name: 'errorLog',
  components: { errorA, errorB }
}
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
</style>
