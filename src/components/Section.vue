<template>
  <div 
    v-if="neutral"
    class="mb-8"
    :class="{ 'px-8': !full }">
    <slot></slot>
  </div>
  <section 
    v-else
    class="mb-8"
    :class="{ 'px-8': !full }">
    <slot></slot>
  </section>
</template>


<script>
  export default {
    props: {
      neutral: {
        type: Boolean,
        default: false
      },
      full: {
        type: Boolean,
        default: false
      }
    },
  }
</script>