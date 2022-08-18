<template>
  <ul class="flex flex-wrap -m-4 pt-1 pb-2" :title="title" v-bind="$attrs">
    <li
      v-for="(item, i) in items"
      tabindex="0"
      class="relative w-full pb-[66.665%] sm:w-1/2 sm:pb-[33.333%] lg:w-1/3 lg:pb-[22.222%]"
      :key="i"
      @mouseover="setItemEnlarged(i)"
      @mousdown="setItemEnlarged(i)"
      @focusin="setItemEnlarged(i)"
      @click.exact="openDialog"
      @keyup.enter.exact="openDialog">
      <div class="absolute inset-0 p-4">
        <Image
          width="3"
          height="2"
          class="block w-full h-full rounded-sm focus:border focus:border-system-fg"
          :class="item.class"
          :dataSource="item.source"
          :alt="item.alt"/>
      </div>
    </li>
  </ul>
  <aside
    tabindex="-1"
    ref="dialog"
    :class="classesDialog"
    @click.exact="closeDialog"
    @keyup.esc.exact="closeDialog">
    <div class="relative min-h-scroll-px">
      <div class="absolute z-0 inset-0 bg-system-bg opacity-90"></div>
      <div class="flex sticky top-0 h-screen">
        <div class="p-h-header">
          <Image
            v-if="itemEnlarged"
            width="3"
            height="2"
            class="block w-full h-full object-contain rounded-md"
            :dataSource="itemEnlarged.source"
            :alt="itemEnlarged.alt"
            :key="itemEnlarged.i"/>
        </div>
      </div>
    </div>
  </aside>
</template>


<script>
  import { session } from "../stores/session.js"
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
        active: false,
        itemEnlarged: null
      }
    },
    computed: {
      classesDialog() {
        if (this.active) {
          return "fixed z-50 inset-0 overflow-auto overscroll-none scrollbar-hidden backdrop-blur-md"
        }
        return "hidden invisible"
      }
    },
    methods: {
      openDialog() {
        this.active = true
        this.$nextTick(() => this.$refs.dialog.focus())
      },
      closeDialog() {
        this.$refs.dialog.blur()
        this.active = false
      },
      setItemEnlarged(i) {
        this.itemEnlarged = { i, ...this.items[i] }
      }
    }
  }
</script>