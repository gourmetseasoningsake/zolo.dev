<template>
  <img 
    class="transition-opacity duration-500"
    :class="classes"
    :src="placeholderSrc"/>
</template>


<script>
  export default { // TODO: handle cached and broken images
    props: {
      sourceSet: {
        type: Array,
        required: true
      }
    },
    data() {
      return  {
        loaded: false,
        placeholderSrc: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      }
    },
    mounted() {
      let observer = new IntersectionObserver(([ entry ], observer_) => {
        if (entry.isIntersecting) {
          let image = new Image()

          image.onload = () => {
            this.$el.srcset = image.srcset
            this.loaded = true
          }

          image.sizes = this.$el.sizes
          image.srcset = this.dataSrcset
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
      },
      dataSrcset() {
        return this.sourceSet.join(",")
      }
    }
  }
</script>