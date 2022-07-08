<template>
  <p class="font-sans font-extralight text-base">{{ content }}</p>
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