<script lang="ts">
import {defineComponent} from "vue";
import Link from "./Link.vue";

export default defineComponent({
  components: {Link},
  props: {
    href: {
      type: String,
      required: false,
    },
    links: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<template>
  <ul class="flex justify-end -mx-2">
    <li
      class="px-1"
      v-for="link in links">
      <Link
        class="block px-1 uppercase"
        :key="link.href"
        :href="link.href"
        :title="link.title"
        :current="link.href === href">
        {{ link.text }}
      </Link>
    </li>
  </ul>
</template>
