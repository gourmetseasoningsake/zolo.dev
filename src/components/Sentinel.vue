<template><div class="_sentinel"></div></template>


<script>
  import { session } from "../stores/session.js"

  export default {
    mounted() {
      let observer = new IntersectionObserver(([ entry ]) => {
        session.setKey("headerTransparent", entry.isIntersecting)
      }, {
        root: null,
        rootMargin: "10px",
        threshold: 1.0 
      })

      observer.observe(this.$el)
    }
  }
</script>