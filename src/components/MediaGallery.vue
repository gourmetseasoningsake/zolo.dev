<template>
  <ul
    role="list"
    ref="list"
    class="flex flex-wrap -m-4 pt-1 pb-2"
    :title="title"
    v-bind="$attrs">
    <li
      v-for="(item, i) in items"
      class="relative w-full pb-[66.665%] sm:w-1/2 sm:pb-[33.333%] lg:w-1/3 lg:pb-[22.222%]"
      :key="i">
      <!-- NB: cannot be a button as safari keeps s***ing-->
      <div
        tabindex="0"
        role="button"
        class="block absolute inset-0 p-4 touch-manipulation"
        :aria-controls="uid"
        :aria-selected="active && i === itemEnlarged.i"
        @touchstart="setItemEnlarged(i)"
        @click="openDialog"
        @focusin="setItemEnlarged(i)"
        @keydown.enter.exact="openDialog">
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
            calc(100vw - (32px * 2))" />
      </div>
    </li>
  </ul>
  <aside
    tabindex="-1"
    class="backdrop-blur-md"
    ref="dialog"
    :id="uid"
    :aria-hidden="!active"
    :class="classesDialog"
    @keydown.esc.prevent.exact="closeDialog"
    @keydown.tab.prevent="closeDialog"
    @keydown.left.prevent.exact="focusPrevDialogControl(dialogControlFocused)"
    @keydown.right.prevent.exact="focusNextDialogControl(dialogControlFocused)">
    <div class="relative h-screen-px">
      <div class="absolute z-0 inset-0 h-full bg-system-bg opacity-90"></div>
      <div class="sticky top-0 h-screen overflow-auto">
        <div class="grid-media h-full">
          <Image
            v-if="itemEnlarged"
            class="area-main block w-full h-full object-contain rounded-md"
            :sourceSet="itemEnlarged.sourceSet"
            :alt="itemEnlarged.alt"
            :key="itemEnlarged.i"
            sizes="calc(100vw - (88px * 2))"
            @click="setPrevItemEnlarged(itemEnlarged.i)"
            @mouseup.prevent.exact="setNextItemEnlarged(itemEnlarged.i)" />
          <div class="area-footer p-8">
            <ul
              role="list"
              class="flex justify-center">
              <li>
                <button
                  tabindex="-1"
                  type="button"
                  aria-label="Rückwärts"
                  title="Rückwärts"
                  class="px-3 py-1 border-y-2 border-r border-l-2 border-action-fg rounded-tl-md rounded-bl-md focus:bg-action-fg font-light text-action-fg focus:text-system-bg touch-manipulation"
                  @touchstart.prevent="setPrevItemEnlarged(itemEnlarged.i)"
                  @mouseup.prevent.exact="setPrevItemEnlarged(itemEnlarged.i)"
                  @keydown.enter.prevent.exact="
                    setPrevItemEnlarged(itemEnlarged.i)
                  ">
                  <span aria-hidden="true">←</span>
                </button>
              </li>
              <li>
                <button
                  tabindex="-1"
                  type="button"
                  aria-label="Vorwärts"
                  title="Vorwärts"
                  class="px-3 py-1 border-y-2 border-r-2 border-l border-action-fg rounded-tr-md rounded-br-md focus:bg-action-fg font-light text-action-fg focus:text-system-bg touch-manipulation"
                  @touchstart.prevent="setNextItemEnlarged(itemEnlarged.i)"
                  @mouseup.prevent.exact="setNextItemEnlarged(itemEnlarged.i)"
                  @keydown.enter.prevent.exact="
                    setNextItemEnlarged(itemEnlarged.i)
                  ">
                  <span aria-hidden="true">→</span>
                </button>
              </li>
              <li class="ml-4">
                <button
                  tabindex="-1"
                  type="button"
                  aria-label="Schliessen"
                  title="Schliessen"
                  class="px-2 py-1 border-2 border-action-fg rounded-md focus:bg-action-fg font-light text-action-fg focus:text-system-bg"
                  @touchstart.prevent="closeDialog"
                  @mouseup.prevent.exact="closeDialog"
                  @keydown.enter.prevent.exact="closeDialog">
                  <span aria-hidden="true">ESC</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import Image from "./Image.vue";
import {uid} from "../utils/random.js";

export default {
  inheritAttrs: false,
  components: {Image},
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
  data() {
    return {
      uid: "dialog-" + uid(),
      active: false,
      itemEnlarged: {i: 0, ...this.items[0]},
      dialogControls: [],
      dialogControlFocused: 1,
    };
  },
  computed: {
    classesDialog() {
      if (this.active) {
        return "fixed z-50 inset-0 overflow-auto overscroll-none scrollbar-hidden";
      }
      return "hidden invisible";
    },
  },
  mounted() {
    this.dialogControls = this.$refs.dialog.querySelectorAll(
      'button[tabindex="-1"]',
    );
  },
  methods: {
    openDialog() {
      this.active = true;
      this.$nextTick(() => {
        this.$refs.dialog.focus();
        this.$refs.dialog.tabIndex = 0;
        this.dialogControls[this.dialogControlFocused].focus();
      });
      document.scrollingElement.classList.add("scrollbar-hidden");
    },
    closeDialog(e) {
      this.$refs.list
        .querySelector('[role="button"][aria-selected="true"]')
        .focus();
      this.$refs.dialog.tabIndex = -1;
      this.dialogControlFocused = 1;
      this.active = false;
      document.scrollingElement.classList.remove("scrollbar-hidden");
    },
    setItemEnlarged(i) {
      this.itemEnlarged = {i, ...this.items[i]};
    },
    setNextItemEnlarged(i) {
      let i_ = (i + 1) % this.items.length;
      this.itemEnlarged = {i: i_, ...this.items[i_]};
    },
    setPrevItemEnlarged(i) {
      const len = this.items.length;
      let i_ = (i + len - 1) % len;
      this.itemEnlarged = {i: i_, ...this.items[i_]};
    },
    focusNextDialogControl(i) {
      let i_ = (i + 1) % this.dialogControls.length;
      this.dialogControls[i_].focus();
      this.dialogControlFocused = i_;
    },
    focusPrevDialogControl(i) {
      const len = this.dialogControls.length;
      let i_ = (i + len - 1) % len;
      this.dialogControls[i_].focus();
      this.dialogControlFocused = i_;
    },
  },
};
</script>
