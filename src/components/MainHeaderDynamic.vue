<template>
  <header 
    class="fixed top-0 z-40 w-full p-8 bg-system-bg border-b border-system-fg transition-colors duration-300"
    :class="classes">
    <slot></slot>
  </header>
</template>


<script>
  import { useStore } from "@nanostores/vue"
  import { session } from "../stores/session.js"

  export default {
    setup() {
      return { session: useStore(session) }
    },
    computed: {
      classes() {
        const headerTransparent = !this.session.headerForceSolid && this.session.headerTransparent
        return {
          "bg-transparent": headerTransparent,
          "border-transparent": headerTransparent
        }
      }
    }
  }
</script>