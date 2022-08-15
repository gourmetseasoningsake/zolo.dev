<template>
  <img 
    class="block w-full h-full rounded-sm transition-opacity duration-500" 
    :class="{ 'opacity-0': !isIntersecting, 'opacity-100': isIntersecting }"
    :data-src="dataSource" 
    :src="source" />
</template>


<script>
  export default {
    props: {
      dataSource: {
        type: String, 
        required: true
      },
      source: {
        type: String,
        default: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      }
    },
    data() {
      return  {
        isIntersecting: false
      }
    },
    mounted() {
      let observer = new IntersectionObserver(([ entry ], observer_) => {
        if (entry.isIntersecting) {
          this.isIntersecting = true
          this.$el.src = this.dataSource
          observer_.disconnect()
        }
      }, {
        root: null,
        rootMargin: "50px",
        threshold: 0 
      })

      observer.observe(this.$el)
    }
  }
</script>