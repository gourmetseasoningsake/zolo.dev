<script lang="ts">
import type {NavItemApp} from "../contents";
import {defineComponent, type PropType} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";
import LinkApp from "./LinkApp.vue";

export default defineComponent({
  components: {LinkApp},
  setup() {
    return {session: useStore(session)};
  },
  props: {
    href: {
      type: String,
      required: false,
    },
    links: {
      type: Array as PropType<NavItemApp[]>,
      default() {
        return [];
      },
    },
  },
  computed: {
    linksApp() {
      return this.links.filter(({slug}) => Boolean(slug));
    },
    hrefAppRoot() {
      return this.links.filter(({slug}) => !Boolean(slug))[0];
    },
    hrefApp() {
      return this.session.stateNavApp?.href || this.hrefAppRoot;
    },
  },
  methods: {
    navigate(link: NavItemApp) {
      history.pushState(link, "", link.href);
      session.setKey("stateNavApp", link);
    },
  },
});
</script>

<template>
  <nav>
    <ul class="flex">
      <li
        class="px-1"
        v-for="link in linksApp">
        <LinkApp
          class="block px-1 uppercase"
          :key="link.href"
          :href="link.href"
          :title="link.title"
          :current="link.href === hrefApp"
          @click.prevent="navigate(link)">
          {{ link.text }}
        </LinkApp>
      </li>
    </ul>
  </nav>
</template>
