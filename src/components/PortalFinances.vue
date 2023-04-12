<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@nanostores/vue";
import {user} from "../stores/finances";
export default defineComponent({
  setup() {
    return {
      user: useStore(user),
    };
  },
  computed: {
    test() {
      if (this.user.loading) {
        return "Lade Finanzen";
      } else if (this.user.error) {
        return "Error";
      } else {
        console.log(this.user.data);
        return "true dummy";
      }
    },
  },
});
</script>

<template>
  <div>{{ test }}</div>
</template>
