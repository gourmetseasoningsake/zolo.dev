<template>
  <dl
    v-if="items.length"
    :title="title"
    class="table max-w-2xl text-xs leading-relaxed">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="table-row">
      <dt class="table-cell italic font-medium pr-3">{{ item.key }}</dt>
      <dd class="table-cell w-full font-thin">
        <Link
          v-if="item.value.href"
          :key="item.value.href"
          :href="item.value.href"
          :title="item.value.title"
          :target="item.value.target"
          :rel="item.value.rel">
          {{ item.value.text }}
        </Link>
        <span v-else>{{ item.value }}</span>
      </dd>
    </div>
  </dl>
</template>

<script>
import Link from "./Link.vue";
export default {
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
};
</script>
