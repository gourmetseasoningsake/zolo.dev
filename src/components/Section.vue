<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    p: {
      type: Boolean,
      default: false,
    },
    px: {
      type: Boolean,
      default: false,
    },
    py: {
      type: Boolean,
      default: false,
    },
    m: {
      type: Boolean,
      default: false,
    },
    mx: {
      type: Boolean,
      default: false,
    },
    my: {
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
    focusInset: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "p-8": this.p,
        "px-8": this.px,
        "py-8": this.py,
        "m-8": this.m,
        "mx-8": this.mx,
        "my-8": this.my,
        "py-px": this.divideBetween || this.divideAfter,
        "divide-after": this.divideAfter,
        "divide-between": this.divideBetween,
        focus: this.focus,
        "focus-inset": this.focusInset,
      };
    },
    tabindex() {
      return this.focus || this.focusInset ? "0" : undefined;
    },
  },
});
</script>

<template>
  <section
    :class="classes"
    :tabindex="tabindex">
    <slot></slot>
  </section>
</template>
