<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    fill: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <svg
    v-if="fill"
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1008.8 1009.6">
    <path
      d="M504 1010c277 0 505-229 505-505S780 1 504 1A508 508 0 0 0 0 505c0 276 229 505 504 505Zm-23-306c-40 0-54-12-54-34 0-62 79-147 204-147s203 85 203 147c0 22-13 34-53 34Zm150-223c-52 0-96-48-97-108 0-58 45-104 97-104s97 45 97 104c0 60-44 108-97 108ZM220 704c-32 0-44-13-44-37 0-65 69-145 177-145 43 0 78 13 105 30-54 42-83 115-57 152Zm133-218c-46 0-84-41-84-93-1-51 39-91 84-91s84 39 84 90c0 53-39 94-84 94Z" />
  </svg>
  <svg
    v-else
    class="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1336.2 899.1">
    <path
      d="M619 899h609c80 0 108-24 108-69 0-126-159-299-413-299-252 0-412 173-412 299 0 45 28 69 108 69Zm305-454c106 0 196-95 196-217 0-120-90-212-196-212s-198 93-197 213c0 121 90 216 197 216ZM90 899h366c-52-75 5-222 115-308-54-35-124-61-212-61C141 530 0 691 0 824c0 48 24 75 90 75Zm269-443c93 0 172-83 172-189 0-105-79-184-172-184-92 0-172 81-171 185 0 105 79 188 171 188Z" />
  </svg>
</template>
