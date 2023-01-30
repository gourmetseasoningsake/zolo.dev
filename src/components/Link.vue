<template>
  <a 
    class="touch-manipulation font-light text-action-fg focus:underline"
    :href="href" 
    :title="title"
    :target="target"
    :rel="rel"
    :aria-current="ariaCurrent">
    <slot></slot>
  </a>
</template>


<script>
  export default {
    props: {
      href: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: false
      },
      target: {
        type: String,
        required: false
      },
      rel: {
        type: String,
        required: false
      },
      current: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      ariaCurrent() { return this.current && "page" }
    }
  }
</script>