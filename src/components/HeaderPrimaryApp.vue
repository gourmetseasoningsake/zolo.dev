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
        "backdrop-blur-md": !this.pageTop,
      };
    },
    classesHeaderBottom() {
      return {
        "-translate-y-16": !this.pageTop,
      };
    },
    classesHeaderBottomInner() {
      return {
        "scale-50": !this.pageTop,
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
    class="fixed top-0 z-40 w-full"
    :class="classesHeader">
    <div
      class="absolute inset-0 z-0 bg-system-bg opacity-90 transition-colors duration-100"
      :class="classesBg"></div>
    <Section
      class="flex justify-between relative z-20"
      neutral>
      <slot name="header-top"></slot>
    </Section>
    <Section
      class="relative z-10 transition-transform duration-200"
      :class="classesHeaderBottom"
      neutral
      full
      divide-after>
      <Section neutral>
        <div
          class="transition-transform duration-200 origin-bottom-left"
          :class="classesHeaderBottomInner">
          <slot name="header-bottom"></slot>
        </div>
      </Section>
    </Section>
  </header>
</template>
