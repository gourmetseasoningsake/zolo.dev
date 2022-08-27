<template>
  <span
    :class="classes"
    :tabindex="tabindex">
    <a
      class="u-email touch-manipulation font-light text-action-fg"
      :href="href"
      :title="title"
      :rel="rel">
      <slot></slot>
    </a>
  </span>
</template>


<script>
  export default {
    props: {
      email: {
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
      },
      focus: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      href() {
        return `mailto:${this.email.replace("mailto:", "").trim()}`
      },
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