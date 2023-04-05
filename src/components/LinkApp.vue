<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";
export default defineComponent({
  setup() {
    return {session: useStore(session)};
  },
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
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
        "underline focus:underline": this.ariaCurrent,
      };
    },
  },
  emits: ["navigate"],
});
</script>

<template>
  <a
    class="touch-manipulation font-light text-action-fg underline-offset-8 decoration-2"
    :class="classes"
    :href="href"
    :title="title"
    :aria-current="ariaCurrent"
    @click.prevent="$emit('navigate')">
    <slot></slot>
  </a>
</template>
