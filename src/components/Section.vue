<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    neutral: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    divideAfter: {
      type: Boolean,
      default: false,
    },
    divideBetween: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "my-8": !(this.divideBetween || this.divideAfter),
        "py-px": this.divideBetween || this.divideAfter,
        "divide-after": this.divideAfter,
        "divide-between": this.divideBetween,
        "px-8": !this.full,
        focus: this.focus && this.full,
        "focus-inset": this.focus && !this.full,
      };
    },
    tabindex() {
      return this.focus ? "0" : undefined;
    },
  },
});
</script>

<template>
  <div
    v-if="neutral"
    :class="classes"
    :tabindex="tabindex">
    <slot></slot>
  </div>
  <section
    v-else
    :class="classes"
    :tabindex="tabindex">
    <slot></slot>
  </section>
</template>
