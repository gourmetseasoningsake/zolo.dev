<template>
  <div v-if="neutral" :class="classes">
    <slot></slot>
  </div>
  <section v-else :class="classes">
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
      first: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return {
          "my-8": true,
          "px-8": !this.full,
          "divide-before": this.divideBefore
        }
      }
    }
  }
</script>