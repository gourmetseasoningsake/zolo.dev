<template>
  <h1 class="text-4xl mb-8">{{ content }}</h1>
</template>

<script>
  export default {
    name: "Heading1",
    props: {
      content: {
        type: String,
        required: true
      } 
    }
  }
</script>