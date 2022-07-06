<template>
  <p class="font-mono text-2xl">{{ content }}</p>
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