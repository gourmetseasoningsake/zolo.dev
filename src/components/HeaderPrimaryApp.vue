<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";
import Section from "./Section.vue";

export default defineComponent({
  components: {Section},
  setup() {
    return {session: useStore(session)};
  },
  computed: {
    pageTop() {
      return this.session.sentinelHeaderBelow;
    },
    classesHeader() {
      return {
        //"backdrop-blur-md": !this.pageTop,
      };
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
        //"bg-transparent": this.pageTop,
      };
    },
  },
});
</script>

<template>
  <header
    class="fixed top-0 z-40 w-full pointer-events-none"
    :class="classesHeader">
    <div
      class="absolute inset-0 z-0 backdrop-blur-md transition-transform origin-bottom duration-200"
      :class="classesBg">
      <div class="absolute inset-0 bg-system-bg opacity-90"></div>
    </div>
    <Section
      class="flex justify-between relative z-20 pointer-events-auto"
      neutral>
      <slot name="header-top"></slot>
    </Section>
    <Section
      class="relative z-10 transition-transform origin-bottom duration-200"
      :class="classesHeaderBottom"
      neutral
      full
      divide-after>
      <Section neutral>
        <div
          class="transition-transform origin-bottom-left duration-200 pointer-events-auto"
          :class="classesHeaderBottomInner">
          <slot name="header-bottom"></slot>
        </div>
      </Section>
    </Section>
  </header>
</template>
