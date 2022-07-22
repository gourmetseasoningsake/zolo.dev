<template>
  <div class="w-screen h-screen"></div>
</template>


<script>
  export default {
    props: {
      bgColor: {
        type: String,
        default: "303030"
      },
      fgColor: {
        type: String,
        default: "ffffff"
      },
      actionColor: {
        type: String,
        default: "38bdf8"
      }
    },
    mounted() {
      Calendly.initInlineWidget({
        url: `https://calendly.com/zolosake?background_color=${this.bgColor}&text_color=${this.fgColor}&primary_color=${this.actionColor}`,
        parentElement: this.$el,
        prefill: {},
        utm: {}
      })
      // Calendly.initBadgeWidget({ 
      //   url: `https://calendly.com/zolosake`,
      //   text: "Schedule time with me",
      //   color: `#${this.bgColor}`, 
      //   textColor: `#${this.fgColor}`, 
      //   branding: false 
      // })
    }
  }
</script>


<!-- <div 
    class="relative w-screen h-screen calendly-inline-widget" 
    data-url="https://calendly.com/zolosake?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=00b2ff">
  </div> -->


