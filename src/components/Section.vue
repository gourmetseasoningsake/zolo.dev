<template>
  <div v-if="neutral" :class="classes" :tabindex="tabindex">
    <slot></slot>
  </div>
  <section v-else :class="classes" :tabindex="tabindex">
    <slot></slot>
  </section>
</template>


<script>
  export default {
    props: {
      neutral: {
        type: Boolean,
        default: false
      },
      full: {
        type: Boolean,
        default: false
      },
      divideBefore: {
        type: Boolean,
        default: false
      },
      focus: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return {
          "my-8": true,
          "px-8": !this.full,
          "divide-before": this.divideBefore,
          "focus": this.focus && this.full,
          "focus-inset": this.focus && !this.full
        }
      },
      tabindex() {
        return this.focus ? "0" : undefined
      }
    }
  }
</script>