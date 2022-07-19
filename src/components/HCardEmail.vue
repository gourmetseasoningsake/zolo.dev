<template>
  <span>
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
    name: "HCardEMail",
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
      }
    },
    computed: {
      href() {
        return `mailto:${this.email.replace("mailto:", "").trim()}`
      }
    }
  }
</script>