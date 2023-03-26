<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    visual: {
      type: String,
      default: "h2",
    },
  },
});
</script>

<template>
  <h2 :class="visual">
    <slot></slot>
  </h2>
</template>
