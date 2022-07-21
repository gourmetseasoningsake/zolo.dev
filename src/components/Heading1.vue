<template>
  <h1 :class="class">
    <slot></slot>
  </h1>
</template>


<script>
  export default {
    props: {
      class: {
        type: String,
        default: "h1"
      }
    }
  }
</script>