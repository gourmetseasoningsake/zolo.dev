<template>
  <img 
    class="transition-opacity duration-500"
    :class="classes"
    :data-src="dataSource" 
    :src="source" />
</template>


<script>
  export default { // TODO: handle cached and broken images
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
        loaded: false
      }
    },
    mounted() {
      let observer = new IntersectionObserver(([ entry ], observer_) => {
        if (entry.isIntersecting) {
          let image = new Image()

          image.onload = () => {
            this.$el.src = image.src
            this.loaded = true
          }

          image.src = this.dataSource
          observer_.disconnect()
        }
      }, {
        root: null,
        rootMargin: "50px",
        threshold: 0 
      })

      observer.observe(this.$el)
    },
    computed: {
      classes() {
        return {
          'opacity-0': !this.loaded,
          'opacity-100': this.loaded
        }
      }
    }
  }
</script>