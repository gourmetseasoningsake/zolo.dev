<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    target: {
      type: String,
      required: false,
    },
    rel: {
      type: String,
      required: false,
    },
    current: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    ariaCurrent() {
      return this.current && "page";
    },
    classes() {
      return {
        underline: this.ariaCurrent,
      };
    },
  },
});
</script>

<template>
  <a
    class="touch-manipulation font-light text-action-fg focus:underline underline-offset-8 decoration-2"
    :class="classes"
    :href="href"
    :title="title"
    :target="target"
    :rel="rel"
    :aria-current="ariaCurrent">
    <slot></slot>
  </a>
</template>
