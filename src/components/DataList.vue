<script lang="ts">
import {defineComponent} from "vue";
import Link from "./Link.vue";
export default defineComponent({
  components: {Link},
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>

<template>
  <dl
    v-if="items.length"
    :title="title"
    class="sm:table max-w-2xl pb-0.5 text-xs leading-relaxed">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="contents sm:table-row">
      <dt class="inline sm:table-cell italic font-extrabold sm:pr-2">
        {{ item.key + " " }}
      </dt>
      <dd class="inline sm:table-cell sm:w-full font-thin">
        <Link
          v-if="item.value.href"
          :key="item.value.href"
          :href="item.value.href"
          :title="item.value.title"
          :target="item.value.target"
          :rel="item.value.rel">
          {{ item.value.text + " " }}
        </Link>
        <span v-else>{{ item.value + " " }}</span>
      </dd>
    </div>
  </dl>
</template>
