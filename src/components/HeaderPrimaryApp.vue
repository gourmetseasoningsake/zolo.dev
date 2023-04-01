<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";
import Section from "./Section.vue";
import Division from "./Division.vue";

export default defineComponent({
  components: {Division, Section},
  setup() {
    return {session: useStore(session)};
  },
  computed: {
    pageTop() {
      return this.session.sentinelHeaderBelow;
    },
    classesHeaderBottom() {
      return {
        "-translate-y-12 sm:-translate-y-16": !this.pageTop,
      };
    },
    classesHeaderBottomInner() {
      return {
        "scale-75 sm:scale-50": !this.pageTop,
      };
    },
    classesBg() {
      return {
        "-translate-y-12 sm:-translate-y-16": !this.pageTop,
      };
    },
  },
});
</script>

<template>
  <header class="fixed top-0 z-40 w-full pointer-events-none">
    <div
      class="absolute inset-0 z-0 backdrop-blur-md transition-transform origin-bottom duration-200"
      :class="classesBg">
      <div class="absolute inset-0 bg-system-bg opacity-90"></div>
    </div>
    <Division
      class="flex justify-between relative z-20 pointer-events-auto"
      px
      my>
      <slot name="header-top"></slot>
    </Division>
    <Division
      class="relative z-10 transition-transform origin-bottom duration-200"
      :class="classesHeaderBottom"
      my
      divide-after>
      <Division
        class="flex justify-between"
        px
        my>
        <Division
          class="transition-transform origin-bottom-left duration-200 pointer-events-auto"
          :class="classesHeaderBottomInner">
          <slot name="header-bottom-left"></slot>
        </Division>
        <Division>
          <slot name="header-bottom-right"></slot>
        </Division>
      </Division>
    </Division>
  </header>
</template>
