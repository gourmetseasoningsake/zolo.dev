<template>
  <ul class="flex flex-wrap -m-4 pt-1 pb-2" :title="title" v-bind="$attrs">
    <li
      v-for="(item, i) in items" :key="i"
      class="relative w-full pb-[66.665%] sm:w-1/2 sm:pb-[33.333%] lg:w-1/3 lg:pb-[22.222%]">
      <div class="absolute inset-0 p-4" @click="toggleDialog">
        <Image
          width="3"
          height="2"
          class="block w-full h-full rounded-sm"
          :class="item.class"
          :dataSource="item.source"
          :alt="item.alt" />
      </div>
    </li>
  </ul>
  <aside :class="classesDialog" ref="dialog">

  </aside>
</template>


<script>
  import Image from "./Image.vue"

  export default {
    inheritAttrs: false,
    components: { Image },
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        default() { return [] }
      }
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      classesDialog() {
        if (this.active) return "fixed z-50 inset-0 bg-system-bg"
        return ""
      }
    },
    methods: {
      toggleDialog() {
        this.active = !this.active
      }
    }
  }
</script>