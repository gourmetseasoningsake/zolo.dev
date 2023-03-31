<script lang="ts">
import {defineComponent, type PropType} from "vue";
import {session, type SessionProps} from "../stores/session";

type Threshold = number[];
export default defineComponent({
  props: {
    sessionKey: {
      type: String as PropType<keyof SessionProps>,
      required: true,
    },
    root: {
      type: String,
    },
    rootMargin: {
      type: String,
      default() {
        return "10px";
      },
    },
    threshold: {
      type: Array as PropType<Threshold>,
      default() {
        return [1.0];
      },
    },
  },
  mounted() {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          session.setKey(this.sessionKey, entry.isIntersecting);
        }
      },
      {
        root: this.rootElement,
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      },
    );

    observer.observe(this.$el);
  },
  computed: {
    rootElement(): HTMLElement | null {
      if (this.root) {
        return document.querySelector(this.root);
      }
      return null;
    },
  },
});
</script>

<template><div class="_sentinel"></div></template>
