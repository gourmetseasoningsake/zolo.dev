<template>
  <header 
    class="fixed top-0 z-40 w-full p-8 bg-system-bg border-b border-system-fg transition-colors duration-300"
    :class="{ 'bg-transparent border-transparent': session.pageTop }">
    <slot></slot>
  </header>
</template>


<script>
  import { useStore } from "@nanostores/vue"
  import { session } from "../stores/session.js"

  export default {
    setup() {
      return { session: useStore(session) }
    }
  }
</script>