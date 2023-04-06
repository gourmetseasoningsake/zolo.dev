<script lang="ts">
import {defineComponent, type PropType} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";
import LinkApp from "./LinkApp.vue";
import type {NavItemApp} from "../navigation";

export default defineComponent({
  components: {LinkApp},
  setup() {
    return {session: useStore(session)};
  },
  props: {
    initNavItemApp: {
      type: Object as PropType<NavItemApp>,
      required: true,
    },
    links: {
      type: Array as PropType<NavItemApp[]>,
      default() {
        return [];
      },
    },
    ariaLabel: {
      type: String,
    },
  },
  computed: {
    linksApp() {
      return this.links.filter(({slug}) => Boolean(slug));
    },
    currentPath() {
      return this.session.stateNavApp?.path || this.initNavItemApp.path;
    },
  },
  methods: {
    onNavigate(navItem: NavItemApp) {
      history.pushState(navItem, "", navItem.path);
      session.setKey("stateNavApp", navItem);
    },
  },
});
</script>

<template>
  <nav :aria-label="ariaLabel">
    <ul class="flex justify-end -mx-2">
      <li
        class="px-1"
        v-for="link in linksApp">
        <LinkApp
          class="block px-1 uppercase"
          :key="link.path"
          :href="link.path"
          :title="link.title"
          :current-path="link.path === currentPath"
          @navigate="onNavigate(link)">
          {{ link.text }}
        </LinkApp>
      </li>
    </ul>
  </nav>
</template>
