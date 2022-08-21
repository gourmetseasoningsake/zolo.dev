<template>
  <ul class="flex flex-wrap -m-4 pt-1 pb-2" :title="title" v-bind="$attrs">
    <li
      v-for="(item, i) in items"
      tabindex="0"
      class="relative w-full pb-[66.665%] sm:w-1/2 sm:pb-[33.333%] lg:w-1/3 lg:pb-[22.222%] touch-manipulation"
      :key="i"
      @focus="setItemEnlarged(i)"
      @mouseover="setItemEnlarged(i)"
      @mouseup="openDialog"
      @touchstart="setItemEnlarged(i)"
      @touchend="openDialog"
      @keyup.enter.exact="openDialog"
      @keydown.space.prevent.exact="openDialog">
      <div class="absolute inset-0 p-4">
        <Image
          class="block w-full h-full focus"
          :class="item.classes"
          :width="item.width"
          :height="item.height"
          :sourceSet="item.sourceSet"
          :alt="item.alt"
          sizes="
            (min-width: 1024px) calc(33.33vw - (32px * 4 / 3)),
            (min-width: 640px) calc(50vw - (32px * 3 / 2)),
            calc(100vw - (32px * 2))"
        />
      </div>
    </li>
  </ul>
  <aside
    tabindex="-1"
    ref="dialog"
    :class="classesDialog"
    @click.exact="closeDialog"
    @keyup.esc.exact="closeDialog"
    @keyup.right.exact="setNextItemEnlarged(itemEnlarged.i)"
    @keyup.left.exact="setPrevItemEnlarged(itemEnlarged.i)">
    <div class="relative h-screen-px">
      <div class="absolute z-0 inset-0 h-full bg-system-bg opacity-90"></div>
      <div class="sticky top-0 h-screen overflow-auto">
        <div class="h-full p-h-header">
          <Image
            v-if="itemEnlarged"
            class="block w-full h-full object-contain rounded-md"
            :sourceSet="itemEnlarged.sourceSet"
            :alt="itemEnlarged.alt"
            :key="itemEnlarged.i"
            sizes="calc(100vw - (88px * 2))"/>
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
        document.scrollingElement.classList.add("scrollbar-hidden")
      },
      closeDialog() {
        this.$refs.dialog.blur()
        this.active = false
        document.scrollingElement.classList.remove("scrollbar-hidden")
      },
      setItemEnlarged(i) {
        this.itemEnlarged = { i, ...this.items[i] }
      },
      setNextItemEnlarged(i) {
        let i_ = (i + 1) % this.items.length
        this.itemEnlarged = { i: i_, ...this.items[i_] }
      },
      setPrevItemEnlarged(i) {
        const len = this.items.length
        let i_ = (i + len-1) % len
        this.itemEnlarged = { i: i_, ...this.items[i_] }
      }
    }
  }
</script>