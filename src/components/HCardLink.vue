<template>
  <span :class="classes">
    <a 
      class="u-url touch-manipulation font-light text-action-fg"
      :href="href" 
      :title="title"
      :target="target"
      :rel="rel">
      <slot></slot>
    </a>
  </span>
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
      focus: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return {
          "focus-within": this.focus
        }
      }
    }
  }
</script>