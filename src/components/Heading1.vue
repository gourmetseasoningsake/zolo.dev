<template>
  <h1 :class="visual">
    <slot></slot>
  </h1>
</template>


<script>
  export default {
    props: {
      visual: {
        type: String,
        default: "h1"
      }
    }
  }
</script>