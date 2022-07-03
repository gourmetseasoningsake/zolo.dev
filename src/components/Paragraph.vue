<template>
  <p>{{ content }}</p>
</template>

<script>
  export default {
    name: "Paragraph",
    props: {
      content: {
        type: String,
        required: true
      }
    }
  }
</script>