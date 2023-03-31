<script lang="ts">
import {defineComponent} from "vue";
import {session} from "../stores/session";
import {useStore} from "@nanostores/vue";
export default defineComponent({
  setup() {
    return {session: useStore(session)};
  },
  props: {
    visual: {
      type: String,
      default: "h1",
    },
    /* NB(290323): Heading1Dynamic uses a defaultText prop instead of just client:load to prevent hydration
     * mismatch errors. In this case, it's a better workaround than using client:only="vue", which introduces
     * content shifting.
     * @see https://github.com/withastro/astro/issues/6669
     * */
    defaultText: {
      type: String,
      required: true,
    },
  },
  computed: {
    scaleDown() {
      return !this.session.sentinelHeadingAbove;
    },
    classes() {
      return {
        "scale-50": this.scaleDown,
      };
    },
  },
});
</script>

<template>
  <h1
    class="transition-transform origin-bottom-left"
    :class="[visual, classes]">
    <slot>{{ defaultText }}</slot>
  </h1>
</template>
