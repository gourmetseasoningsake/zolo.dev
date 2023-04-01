<script lang="ts">
import {defineComponent, PropType} from "vue";

type HeadingTag = "h1" | "h2";
type HeadingAppearance = "h1" | "h2" | "h3";
export default defineComponent({
  props: {
    is: {
      type: String as PropType<HeadingTag>,
      required: true,
    },
    as: {
      type: String as PropType<HeadingAppearance>,
    },
    mb: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    appearance() {
      return this.as || this.is;
    },
    classes() {
      return {
        "font-black text-4xl sm:text-6xl": this.appearance === "h1",
        "font-medium italic text-2xl sm:text-3xl": this.appearance === "h2",
        "font-medium italic": this.appearance === "h3",
        "mb-8": this.mb && this.appearance === "h1",
        "mb-2": this.mb && this.appearance === "h2",
        "mb-1": this.mb && this.appearance === "h3",
      };
    },
  },
});
</script>

<template>
  <component
    class="font-mono"
    :class="classes"
    :is="`${is}`">
    <slot></slot>
  </component>
</template>
