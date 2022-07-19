<template>
  <span>
    <a 
      class="u-url touch-manipulation font-light text-action-fg"
      :href="href" 
      :title="title"
      :rel="rel">
      <slot></slot>
    </a>
  </span>
</template>


<script>
  export default {
    name: "HCardLink",
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