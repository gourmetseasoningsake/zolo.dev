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
  methods: {
    isCurrent(linkHref: string): boolean {
      const href = String(this.href);
      return (
        (linkHref === "/" && linkHref === href) ||
        (linkHref !== "/" && href.startsWith(linkHref))
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
          :key="link.href"
          :href="link.href"
          :title="link.title"
          :current="isCurrent(link.href)">
          {{ link.text }}
        </Link>
      </li>
    </ul>
  </nav>
</template>
