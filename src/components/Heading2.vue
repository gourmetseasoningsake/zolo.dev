<template>
  <h2 :class="visual">
    <slot></slot>
  </h2>
</template>


<script>
  export default {
    props: {
      visual: {
        type: String,
        default: "h2"
      }
    }
  }
</script>