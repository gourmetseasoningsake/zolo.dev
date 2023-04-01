<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    visual: {
      type: String,
      default: "h1",
    },
    tight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return this.tight ? `${this.visual} tight` : this.visual;
    },
  },
});
</script>

<template>
  <h1 :class="classes">
    <slot></slot>
  </h1>
</template>
