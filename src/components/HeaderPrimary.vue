<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";

export default defineComponent({
  setup() {
    return {session: useStore(session)};
  },
  computed: {
    pageTop() {
      return this.session.sentinelHeader;
    },
    classesHeader() {
      return {
        "border-transparent": this.pageTop,
        "backdrop-blur-md": !this.pageTop,
      };
    },
    classesBg() {
      return {
        "bg-transparent": this.pageTop,
      };
    },
  },
});
</script>

<template>
  <header
    class="fixed top-0 z-40 w-full p-8 border-b border-system-fg transition-colors duration-200"
    :class="classesHeader">
    <div
      class="absolute inset-0 z-0 bg-system-bg opacity-90 transition-colors duration-100"
      :class="classesBg"></div>
    <div class="flex justify-between relative z-20">
      <slot name="header-top"></slot>
    </div>
  </header>
</template>
