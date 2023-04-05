<script lang="ts">
import {defineComponent, defineAsyncComponent, PropType} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";
import type {NavItemApp} from "../contents";

// https://vuejs.org/guide/components/async.html#loading-and-error-states
const Portal = defineAsyncComponent(() => import("./Portal.vue"));
const PortalFinances = defineAsyncComponent(
  () => import("./PortalFinances.vue"),
);
const PortalCollaborators = defineAsyncComponent(
  () => import("./PortalCollaborators.vue"),
);
const pages = {
  finances: PortalFinances,
  collaborators: PortalCollaborators,
  undefined: Portal,
};

export default defineComponent({
  components: {Portal, PortalFinances, PortalCollaborators},
  setup() {
    return {session: useStore(session)};
  },
  props: {
    initNavItemApp: {
      type: Object as PropType<NavItemApp>,
      required: true,
    },
  },
  computed: {
    page() {
      const stateNavApp = this.session.stateNavApp || this.initNavItemApp;
      return pages[
        String(stateNavApp.slug || "undefined") as keyof typeof pages
      ];
    },
  },
});
</script>

<template>
  <keep-alive>
    <component :is="page"></component>
  </keep-alive>
</template>
