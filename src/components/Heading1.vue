<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    visual: {
      type: String,
      default: "h1",
    },
  },
});
</script>

<template>
  <h1 :class="visual">
    <slot></slot>
  </h1>
</template>
