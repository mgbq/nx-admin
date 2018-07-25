<template>
  <div class="nx-container-full">
    <div v-if="$slots.header" class="nx-container-full__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="nx-container-full__body">
      <slot/>
    </div>
    <div v-if="$slots.footer" class="nx-container-full__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nx-container-full'
}
</script>
