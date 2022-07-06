<template>
  <h1 class="font-sans font-black text-6xl uppercase mb-4">{{ content }}</h1>
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