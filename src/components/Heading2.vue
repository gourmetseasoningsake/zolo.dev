<template>
  <h2 class="font-sans font-extralight text-2xl mb-4">{{ content }}</h2>
</template>

<script>
  export default {
    name: "Heading2",
    props: {
      content: {
        type: String,
        required: true
      } 
    }
  }
</script>