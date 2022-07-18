<template>
  <a 
    class="touch-manipulation font-light text-action-fg"
    :href="href" 
    :title="title"
    :rel="rel">
    <slot></slot>
  </a>
</template>


<script>
  export default {
    name: "Link",
    props: {
      href: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: false
      },
      rel: {
        type: String,
        required: false
      }
    }
  }
</script>