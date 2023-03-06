<template>
  <span :class="classesParent">
    <a
      class="u-url touch-manipulation font-light text-action-fg"
      :class="classesChild"
      :href="href"
      :title="title"
      :target="target"
      :rel="rel">
      <slot></slot>
    </a>
  </span>
</template>

<script>
export default {
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
};
</script>
