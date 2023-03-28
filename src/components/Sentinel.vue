<script lang="ts">
import {defineComponent} from "vue";
import {session} from "../stores/session";

export default defineComponent({
  mounted() {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          session.setKey("headerTransparent", entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 1.0,
      },
    );

    observer.observe(this.$el);
  },
});
</script>

<template><div class="_sentinel"></div></template>
