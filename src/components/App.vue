<script lang="ts">
import {defineComponent, defineAsyncComponent, PropType} from "vue";
import {useStore} from "@nanostores/vue";
import {session} from "../stores/session";

import type {NavItem} from "../navigation";

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
    initNavItem: {
      type: Object as PropType<NavItem>,
      required: true,
    },
  },
  computed: {
    page() {
      const stateNavApp = this.session.stateNavApp || this.initNavItem;
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
