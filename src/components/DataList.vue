<template>
  <dl 
    v-if="items.length"
    :title="title"
    class="table max-w-2xl text-xs leading-relaxed">
    <div 
      v-for="(item, i) in items" :key="i"
      class="table-row">
      <dt class="table-cell italic font-medium pr-3">{{ item.key }}</dt>
      <dd class="table-cell w-full font-thin">{{ item.value }}</dd>
    </div>
  </dl>
</template>


<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        default() { return []; }
      }
    },
  }
</script>