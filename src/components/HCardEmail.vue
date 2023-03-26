<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    rel: {
      type: String,
      required: false,
    },
    focusWithin: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    href() {
      return `mailto:${this.email.replace("mailto:", "").trim()}`;
    },
    classesParent() {
      return {
        "focus-within": this.focusWithin,
      };
    },
    classesChild() {
      return {
        focus: this.focus,
      };
    },
  },
});
</script>

<template>
  <span :class="classesParent">
    <a
      class="u-email touch-manipulation font-light text-action-fg"
      :class="classesChild"
      :href="href"
      :title="title"
      :rel="rel">
      <slot></slot>
    </a>
  </span>
</template>
