<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";
import Division from "./Division.vue";
import Section from "./Section.vue";
import Content from "./Content.vue";

export default defineComponent({
  components: {Division, Section, Content},
  setup() {
    return {session: useStore(session)};
  },
  computed: {
    classesHeaderBottom() {
      return {
        "-translate-y-12 sm:-translate-y-16": !this.session.sentinelHeader,
      };
    },
    classesHeaderBottomInner() {
      return {
        "scale-75 sm:scale-50": !this.session.sentinelHeader,
      };
    },
    classesBg() {
      return {
        "-translate-y-12 sm:-translate-y-16": !this.session.sentinelHeader,
      };
    },
  },
});
</script>

<template>
  <header class="fixed top-0 z-40 w-full pointer-events-none">
    <Division
      class="absolute inset-0 z-0 backdrop-blur-md transition-transform origin-bottom duration-200"
      :class="classesBg">
      <Division class="absolute inset-0 bg-system-bg opacity-90"></Division>
    </Division>
    <Division
      class="flex justify-between relative z-20 pointer-events-auto"
      px
      my>
      <slot name="header-top"></slot>
    </Division>
    <Division
      class="relative z-10 transition-transform origin-bottom duration-200 pointer-events-auto"
      :class="classesHeaderBottom"
      divide-after>
      <Division
        class="flex items-end"
        px
        my>
        <Division
          class="transition-transform origin-bottom-left duration-200"
          :class="classesHeaderBottomInner">
          <slot name="header-bottom-left"></slot>
        </Division>
        <Content>
          <slot name="header-bottom-right"></slot>
        </Content>
      </Division>
    </Division>
  </header>
</template>
