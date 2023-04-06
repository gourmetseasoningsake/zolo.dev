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
    hrefApp() {
      return this.session.stateNavApp?.href || this.initNavItemApp.href;
    },
  },
  methods: {
    onNavigate(link: NavItemApp) {
      history.pushState(link, "", link.href);
      session.setKey("stateNavApp", link);
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
          :key="link.href"
          :href="link.href"
          :title="link.title"
          :current="link.href === hrefApp"
          @navigate="onNavigate(link)">
          {{ link.text }}
        </LinkApp>
      </li>
    </ul>
  </nav>
</template>
