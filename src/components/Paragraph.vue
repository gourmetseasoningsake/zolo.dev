<template>
  <p
    class="mb-2 last:mb-0 font-mono font-thin"
    :class="classes"
    :tabindex="tabindex">
    <span class="inline-block max-w-2xl">
      <slot></slot>
    </span>
  </p>
</template>


<script>
  export default {
    props: {
      focus: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return {
          "focus": this.focus
        }
      },
      tabindex() {
        return this.focus ? "0" : undefined
      }
    }
  }
</script>