<template>
  <h2 :class="class">
    <slot></slot>
  </h2>
</template>


<script>
  export default {
    name: "Heading2",
    props: {
      class: {
        type: String,
        default: "h2"
      }
    }
  }
</script>