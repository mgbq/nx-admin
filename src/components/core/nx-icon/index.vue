<template>
  <i class="fa" :class="`fa-${name}`" aria-hidden="true"></i>
</template>

<script>
export default {
  name: 'nx-icon',
  props: {
    name: {
      type: String,
      required: false,
      default: 'font-awesome'
    }
  }
}
</script>
