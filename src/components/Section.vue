<template>
  <div 
    v-if="neutral"
    class="mb-8"
    :class="classes">
    <slot></slot>
  </div>
  <section 
    v-else
    class="mb-8"
    :class="classes">
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
      }
    },
    computed: {
      classes() {
        return {
          "px-8": !this.full,
          "divide-before": this.divideBefore
        }
      }
    }
  }
</script>