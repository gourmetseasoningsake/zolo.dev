<script lang="ts">
import {defineComponent} from "vue";
import Link from "./Link.vue";

export default defineComponent({
  components: {Link},
  props: {
    currentPath: {
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
  methods: {
    isCurrentPath(href: string): boolean {
      const currentPath = String(this.currentPath);
      return (
        (href === "/" && href === currentPath) ||
        (href !== "/" && currentPath.startsWith(href))
      );
    },
  },
});
</script>

<template>
  <nav>
    <ul class="flex justify-end -mx-2">
      <li
        class="px-1"
        v-for="link in links">
        <Link
          class="block px-1 uppercase"
          :key="link.path"
          :href="link.path"
          :title="link.title"
          :current-path="isCurrentPath(link.path)">
          {{ link.text }}
        </Link>
      </li>
    </ul>
  </nav>
</template>
